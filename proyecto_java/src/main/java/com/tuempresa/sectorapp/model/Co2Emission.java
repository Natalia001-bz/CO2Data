package com.tuempresa.sectorapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name = "co2_emissions")

public class Co2Emission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String country;
    private Integer year;
    private String isoCode;
    private BigDecimal population;
    private BigDecimal gdp;
    private BigDecimal co2;
    private BigDecimal co2PerCapita;
    private BigDecimal co2PerGdp;
    private BigDecimal coalCo2;
    private BigDecimal oilCo2;
    private BigDecimal gasCo2;
    private BigDecimal cementCo2;
    private BigDecimal flaringCo2;
    private BigDecimal landUseChangeCo2;
    private BigDecimal primaryEnergyConsumption;
    private BigDecimal shareGlobalCo2;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    private Double emission;

    public Co2Emission() {
    }

    public Co2Emission(String country, Integer year, Double emission) {
        this.country = country;
        this.year = year;
        this.emission = emission;
    }

    public Double getEmission() {
        return emission;
    }

    public void setEmission(Double emission) {
        this.emission = emission;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getIsoCode() {
        return isoCode;
    }

    public void setIsoCode(String isoCode) {
        this.isoCode = isoCode;
    }

    public BigDecimal getPopulation() {
        return population;
    }

    public void setPopulation(BigDecimal population) {
        this.population = population;
    }

    public BigDecimal getGdp() {
        return gdp;
    }

    public void setGdp(BigDecimal gdp) {
        this.gdp = gdp;
    }

    public BigDecimal getCo2() {
        return co2;
    }

    public void setCo2(BigDecimal co2) {
        this.co2 = co2;
    }

    public BigDecimal getCo2PerCapita() {
        return co2PerCapita;
    }

    public void setCo2PerCapita(BigDecimal co2PerCapita) {
        this.co2PerCapita = co2PerCapita;
    }

    public BigDecimal getCo2PerGdp() {
        return co2PerGdp;
    }

    public void setCo2PerGdp(BigDecimal co2PerGdp) {
        this.co2PerGdp = co2PerGdp;
    }

    public BigDecimal getCoalCo2() {
        return coalCo2;
    }

    public void setCoalCo2(BigDecimal coalCo2) {
        this.coalCo2 = coalCo2;
    }

    public BigDecimal getOilCo2() {
        return oilCo2;
    }

    public void setOilCo2(BigDecimal oilCo2) {
        this.oilCo2 = oilCo2;
    }

    public BigDecimal getGasCo2() {
        return gasCo2;
    }

    public void setGasCo2(BigDecimal gasCo2) {
        this.gasCo2 = gasCo2;
    }

    public BigDecimal getCementCo2() {
        return cementCo2;
    }

    public void setCementCo2(BigDecimal cementCo2) {
        this.cementCo2 = cementCo2;
    }

    public BigDecimal getFlaringCo2() {
        return flaringCo2;
    }

    public void setFlaringCo2(BigDecimal flaringCo2) {
        this.flaringCo2 = flaringCo2;
    }

    public BigDecimal getLandUseChangeCo2() {
        return landUseChangeCo2;
    }

    public void setLandUseChangeCo2(BigDecimal landUseChangeCo2) {
        this.landUseChangeCo2 = landUseChangeCo2;
    }

    public BigDecimal getPrimaryEnergyConsumption() {
        return primaryEnergyConsumption;
    }

    public void setPrimaryEnergyConsumption(BigDecimal primaryEnergyConsumption) {
        this.primaryEnergyConsumption = primaryEnergyConsumption;
    }

    public BigDecimal getShareGlobalCo2() {
        return shareGlobalCo2;
    }

    public void setShareGlobalCo2(BigDecimal shareGlobalCo2) {
        this.shareGlobalCo2 = shareGlobalCo2;
    }

    public void setEmission(double emission) {
        this.emission = emission;
    }

    public void setYear(int year) {
        this.year = year;
    }

}
