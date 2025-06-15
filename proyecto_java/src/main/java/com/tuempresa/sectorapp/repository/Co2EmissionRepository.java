package com.tuempresa.sectorapp.repository;

import com.tuempresa.sectorapp.model.Co2Emission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Co2EmissionRepository extends JpaRepository<Co2Emission, Long> {

    @Query("SELECT c FROM Co2Emission c WHERE c.year = (SELECT MAX(e.year) FROM Co2Emission e) ORDER BY c.co2 DESC LIMIT 10")
    List<Co2Emission> findTop10ByLatestYearOrderByCo2Desc();

    @Query("SELECT c FROM Co2Emission c WHERE c.year = ?1 AND c.country IN ('Argentina', 'Brazil', 'Mexico', 'Colombia', 'Chile', 'Peru', 'Ecuador', 'Venezuela') ORDER BY c.co2PerCapita DESC")
    List<Co2Emission> findLatinAmericaByYearOrderByCo2PerCapitaDesc(Integer year);

    @Query("SELECT c FROM Co2Emission c WHERE c.year = ?1 ORDER BY c.co2PerGdp DESC LIMIT 20")
    List<Co2Emission> findTop20ByYearOrderByCo2PerGdpDesc(Integer year);

    @Query("SELECT c FROM Co2Emission c WHERE c.year = ?1 ORDER BY c.landUseChangeCo2 DESC LIMIT 10")
    List<Co2Emission> findTop10ByYearOrderByLandUseChangeCo2Desc(Integer year);

    @Query("SELECT c FROM Co2Emission c WHERE c.year = ?1 ORDER BY c.primaryEnergyConsumption DESC LIMIT 10")
    List<Co2Emission> findTop10ByYearOrderByPrimaryEnergyConsumptionDesc(Integer year);

    @Query("SELECT c FROM Co2Emission c WHERE c.year = ?1 ORDER BY c.shareGlobalCo2 DESC LIMIT 10")
    List<Co2Emission> findTop10ByYearOrderByShareGlobalCo2Desc(Integer year);
}