package com.tuempresa.sectorapp.repository; // Ajusta el paquete del repositorio según tu estructura

import java.util.List; // Ruta del modelo corregida
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tuempresa.sectorapp.model.Usuario; // Para métodos que pueden o no encontrar un resultado

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    // Buscar un usuario por su email
    // 'Optional' se usa para manejar casos donde el email podría no existir.
    Optional<Usuario> findByEmail(String email);

    // Buscar usuarios por nombre completo (ignorando mayúsculas/minúsculas)
    List<Usuario> findByNombreIgnoreCase(String nombre);

    // Buscar usuarios que contengan parte del nombre o apellido (ignorando mayúsculas/minúsculas)
    List<Usuario> findByNombreContainingIgnoreCaseOrApellidosContainingIgnoreCase(String nombre, String apellidos);

    // Contar el número de usuarios nacidos después de una fecha específica
    long countByFechaNacimientoAfter(java.sql.Date fecha);

    // Buscar usuarios que contengan una cadena en su nombre y ordenarlos por apellidos
    List<Usuario> findByNombreContainingOrderByApellidosAsc(String nombre);
}