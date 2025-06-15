package com.tuempresa.sectorapp.service;

// Update the import to match the actual package of Co2Emission
import com.tuempresa.sectorapp.model.Co2Emission;
import com.tuempresa.sectorapp.repository.Co2EmissionRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Co2DataService {

    private final Co2EmissionRepository repository;


    public Co2DataService(Co2EmissionRepository repository) {
        this.repository = repository;
    }

    public List<Co2Emission> getTop10EmittersLatestYear() {
        return repository.findTop10ByLatestYearOrderByCo2Desc();
    }

    public List<Co2Emission> getLatinAmericaPerCapita(Integer year) {
        return repository.findLatinAmericaByYearOrderByCo2PerCapitaDesc(year);
    }

    public List<Co2Emission> getCarbonIntensity(Integer year) {
        return repository.findTop20ByYearOrderByCo2PerGdpDesc(year);
    }

    public List<Co2Emission> getLandUseChangeImpact(Integer year) {
        return repository.findTop10ByYearOrderByLandUseChangeCo2Desc(year);
    }

    public List<Co2Emission> getPrimaryEnergyConsumption(Integer year) {
        return repository.findTop10ByYearOrderByPrimaryEnergyConsumptionDesc(year);
    }

    public List<Co2Emission> getGlobalShareRanking(Integer year) {
        return repository.findTop10ByYearOrderByShareGlobalCo2Desc(year);
    }
}
