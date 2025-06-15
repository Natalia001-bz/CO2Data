
package com.tuempresa.sectorapp.controller;

import java.io.IOException;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.tuempresa.sectorapp.model.Usuario;
import com.tuempresa.sectorapp.repository.UsuarioRepository;

@Controller
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/registrarUsuario")
    public String registrarUsuario(
        
            @RequestParam("documento") String documentoStr,
            @RequestParam("nombre") String nombre,
            @RequestParam("apellidos") String apellidos,
            @RequestParam("email") String email,
            @RequestParam("fechaNacimiento") String fechaNacimientoStr,
            @RequestParam("imagen") MultipartFile imagen
    ) {
        try {
            int documento = Integer.parseInt(documentoStr.trim());

            // Detectar formato de fecha y convertir
            Date fechaNacimiento;
            if (fechaNacimientoStr.contains("/")) {
                // dd/MM/yyyy
                java.util.Date parsed = new SimpleDateFormat("dd/MM/yyyy").parse(fechaNacimientoStr.trim());
                fechaNacimiento = new Date(parsed.getTime());
            } else {
                // yyyy-MM-dd
                fechaNacimiento = Date.valueOf(fechaNacimientoStr.trim());
            }

            if (imagen == null || imagen.isEmpty()) {
                throw new IllegalArgumentException("Debe seleccionar una imagen.");
            }

            byte[] imagenBytes = imagen.getBytes();

            Usuario usuario = new Usuario(
                    documento,
                    nombre.trim(),
                    apellidos.trim(),
                    fechaNacimiento,
                    email.trim(),
                    imagenBytes
            );

            usuarioRepository.save(usuario);
            return "redirect:/reg";

        } catch (IOException e) {
            e.printStackTrace();
            return "redirect:/reg?error";
        } catch (ParseException e) {
            e.printStackTrace();
            return "redirect:/reg?error";
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return "redirect:/reg?error";
        }
    }
}
