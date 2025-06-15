package com.tuempresa.sectorapp.controller;

import com.tuempresa.sectorapp.model.Co2Emission;
import com.tuempresa.sectorapp.service.Co2DataService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/co2")
public class Co2DataController {

    private final Co2DataService service;

    public Co2DataController(Co2DataService service) {
        this.service = service;
    }

    @GetMapping("/top10")
    public List<Co2Emission> getTop10Emitters() {
        return service.getTop10EmittersLatestYear();
    }

    @GetMapping("/latin-america")
    public List<Co2Emission> getLatinAmericaPerCapita(@RequestParam(defaultValue = "2020") Integer year) {
        return service.getLatinAmericaPerCapita(year);
    }

    @GetMapping("/carbon-intensity")
    public List<Co2Emission> getCarbonIntensity(@RequestParam(defaultValue = "2020") Integer year) {
        return service.getCarbonIntensity(year);
    }

    @GetMapping("/land-use")
    public List<Co2Emission> getLandUseChange(@RequestParam(defaultValue = "2020") Integer year) {
        return service.getLandUseChangeImpact(year);
    }

    @GetMapping("/energy-consumption")
    public List<Co2Emission> getEnergyConsumption(@RequestParam(defaultValue = "2020") Integer year) {
        return service.getPrimaryEnergyConsumption(year);
    }

    @GetMapping("/global-share")
    public List<Co2Emission> getGlobalShare(@RequestParam(defaultValue = "2020") Integer year) {
        return service.getGlobalShareRanking(year);
    }
}