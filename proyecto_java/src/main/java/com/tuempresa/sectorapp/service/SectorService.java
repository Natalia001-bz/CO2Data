package com.tuempresa.sectorapp.service;

import com.tuempresa.sectorapp.model.Sector;
import com.tuempresa.sectorapp.repository.SectorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectorService {
    private final SectorRepository sectorRepository;

    public SectorService(SectorRepository sectorRepository) {
        this.sectorRepository = sectorRepository;
    }

    public Sector guardarSector(Sector sector) {
        return sectorRepository.save(sector);
    }

    public List<Sector> listarTodos() {
        return sectorRepository.findAll();
    }
}
