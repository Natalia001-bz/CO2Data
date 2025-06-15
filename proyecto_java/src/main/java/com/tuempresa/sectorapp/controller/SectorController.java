package com.tuempresa.sectorapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SectorController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/reg")
    public String registrarUsuario(){
        return "Registrar";
    }
}
