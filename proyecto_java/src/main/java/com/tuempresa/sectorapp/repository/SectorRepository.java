package com.tuempresa.sectorapp.repository;

import com.tuempresa.sectorapp.model.Sector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectorRepository extends JpaRepository<Sector, Long> {
}
