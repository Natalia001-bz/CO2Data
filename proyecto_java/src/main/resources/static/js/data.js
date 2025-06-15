
const CO2Data = {

  topEmitters: {
    year: 2022,
    data: [
      { rank: 1, country: "China", co2: 11472.1, co2PerCapita: 8.0, trend: "↑" },
      { rank: 2, country: "Estados Unidos", co2: 5032.7, co2PerCapita: 14.9, trend: "↓" },
      { rank: 3, country: "India", co2: 2686.4, co2PerCapita: 1.9, trend: "↑↑" },
      { rank: 4, country: "Rusia", co2: 1950.8, co2PerCapita: 13.4, trend: "→" },
      { rank: 5, country: "Japón", co2: 1106.2, co2PerCapita: 8.8, trend: "↓" },
      { rank: 6, country: "Alemania", co2: 753.9, co2PerCapita: 9.0, trend: "↓" },
      { rank: 7, country: "Irán", co2: 690.4, co2PerCapita: 8.0, trend: "↑" },
      { rank: 8, country: "Corea del Sur", co2: 659.1, co2PerCapita: 12.7, trend: "→" },
      { rank: 9, country: "Arabia Saudita", co2: 625.5, co2PerCapita: 17.6, trend: "↑" },
      { rank: 10, country: "Indonesia", co2: 615.3, co2PerCapita: 2.2, trend: "↑↑" }
    ]
  },


  latinAmericaPerCapita: {
    year: 2023,
    data: [
      { country: "Chile", co2: 94.2, co2PerCapita: 4.9, trend: "↑" },
      { country: "Argentina", co2: 186.3, co2PerCapita: 4.1, trend: "↓" },
      { country: "México", co2: 480.5, co2PerCapita: 3.7, trend: "↓" },
      { country: "Venezuela", co2: 95.8, co2PerCapita: 3.4, trend: "→" },
      { country: "Brasil", co2: 535.6, co2PerCapita: 2.5, trend: "↑" },
      { country: "Colombia", co2: 90.1, co2PerCapita: 1.8, trend: "→" },
      { country: "Perú", co2: 58.7, co2PerCapita: 1.8, trend: "↑" },
      { country: "Ecuador", co2: 30.2, co2PerCapita: 1.7, trend: "→" },
      { country: "Bolivia", co2: 28.9, co2PerCapita: 2.4, trend: "↑" },
      { country: "Paraguay", co2: 12.5, co2PerCapita: 1.7, trend: "→" }
    ]
  },


  carbonIntensity: {
    year: 2020,
    data: [
      { country: "Mongolia", co2PerGdp: 2.51, gdp: 13.7, co2: 34.4 },
      { country: "Sudáfrica", co2PerGdp: 1.92, gdp: 315.1, co2: 604.9 },
      { country: "Kazajistán", co2PerGdp: 1.81, gdp: 171.1, co2: 309.7 },
      { country: "China", co2PerGdp: 1.15, gdp: 14723, co2: 10668 },
      { country: "India", co2PerGdp: 0.99, gdp: 2623, co2: 2458 },
      { country: "Estados Unidos", co2PerGdp: 0.33, gdp: 20937, co2: 4713 },
      { country: "Alemania", co2PerGdp: 0.29, gdp: 3846, co2: 644 },
      { country: "Francia", co2PerGdp: 0.19, gdp: 2630, co2: 303 }
    ]
  },


  landUseChange: {
    year: "2015-2020",
    data: [
      { country: "Brasil", emissions: 425.3, mainCause: "Deforestación Amazonía" },
      { country: "Indonesia", emissions: 287.2, mainCause: "Palma aceitera" },
      { country: "R.D. Congo", emissions: 159.7, mainCause: "Agricultura de subsistencia" },
      { country: "Colombia", emissions: 42.2, mainCause: "Ganadería" },
      { country: "Perú", emissions: 32.5, mainCause: "Tala ilegal" }
    ]
  },


  emissionsBySource: {
    global: {
      coal: 14500,
      oil: 12100,
      gas: 8200,
      cement: 1400,
      flaring: 480,
      other: 1100
    },
    countries: [
      {
        country: "China",
        sources: {
          coal: 8200,
          oil: 1500,
          gas: 600,
          cement: 900
        }
      },
      {
        country: "Estados Unidos",
        sources: {
          coal: 1100,
          oil: 2300,
          gas: 1400,
          cement: 50
        }
      },
      {
        country: "India",
        sources: {
          coal: 1850,
          oil: 480,
          gas: 120,
          cement: 120
        }
      }
    ]
  },


  energyConsumption: [
    { country: "China", primaryEnergyConsumption: 159000, year: 2020 },
    { country: "Estados Unidos", primaryEnergyConsumption: 92000, year: 2020 },
    { country: "India", primaryEnergyConsumption: 35000, year: 2020 },
    { country: "Rusia", primaryEnergyConsumption: 31000, year: 2020 },
    { country: "Japón", primaryEnergyConsumption: 19000, year: 2020 }
  ],


  globalShare: [
    { country: "China", shareGlobalCo2: 30.7 },
    { country: "Estados Unidos", shareGlobalCo2: 13.6 },
    { country: "India", shareGlobalCo2: 7.1 },
    { country: "Rusia", shareGlobalCo2: 4.8 },
    { country: "Japón", shareGlobalCo2: 3.1 },
    { country: "Resto del mundo", shareGlobalCo2: 40.7 }
  ],


  historical: {
    world: {
      co2Total: [22700, 24500, 26700, 29400, 33100, 35400, 37200],
      co2PerCapita: [4.3, 4.2, 4.3, 4.5, 4.8, 4.9, 5.0],
      years: [1990, 1995, 2000, 2005, 2010, 2015, 2020]
    },
    regions: {
      asia: [5900, 7800, 9500, 13500, 18000, 20500, 22500],
      northAmerica: [6100, 6500, 7000, 7100, 6700, 5800, 5500],
      europe: [5800, 5200, 5100, 5100, 4500, 3800, 3500]
    }
  }
};


window.CO2Data = CO2Data;