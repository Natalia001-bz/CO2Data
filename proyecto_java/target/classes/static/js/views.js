// ================ Carga de datos ==============================

document.addEventListener('DOMContentLoaded', function () {

  if (!window.CO2Data) {
    console.error('Error: Datos CO2 no cargados');
    showErrorAlert();
    return;
  }

  try {
    initTop10Chart();
    initLatinAmericaChart();
    initCarbonIntensityChart();
    initLandUseChart();
    initEnergySourcesCharts();
    initEnergyConsumptionChart();
    initGlobalShareChart();
    initHistoricalTrendsChart();

    setupEventListeners();

    console.log('Todos los gráficos inicializados correctamente');
  } catch (error) {
    console.error('Error al inicializar gráficos:', error);
    showErrorAlert();
  }


  // ========== FUNCIONES DE VISUALIZACIÓN ========== //

  function initTop10Chart() {
    const data = CO2Data.topEmitters.data;
    const container = document.getElementById('top10-chart');

    if (!container) return;

    const chartData = data.map(item => ({
      x: item.country,
      y: item.co2,
      fillColor: getTrendColor(item.trend),
      trend: item.trend
    }));

    const options = {
      series: [{
        name: 'Emisiones CO₂',
        data: chartData
      }],
      chart: {
        type: 'bar',
        height: 400,
        toolbar: { show: true }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          distributed: true
        }
      },
      colors: chartData.map(item => item.fillColor),
      dataLabels: { enabled: false },
      xaxis: {
        title: { text: 'Emisiones (Mt CO₂)' },
        labels: {
          formatter: function (val) {
            return Math.round(val).toLocaleString();
          }
        }
      },
      yaxis: { title: { text: 'Países' } },
      tooltip: {
        custom: function ({ dataPointIndex }) {
          const item = data[dataPointIndex];
          return `
            <div class="chart-tooltip">
              <strong>${item.country}</strong><br>
              <b>${item.co2.toLocaleString()} Mt CO₂</b><br>
              Per cápita: ${item.co2PerCapita.toFixed(1)} t<br>
              Tendencia: ${getTrendIcon(item.trend)}
            </div>
          `;
        }
      }
    };

    new ApexCharts(container, options).render();

    updateTable('top10-table', data.map(item => [
      item.country,
      item.co2.toLocaleString(),
      item.co2PerCapita.toFixed(1),
      item.year,
      getTrendIcon(item.trend)
    ]));
  }


  // ========  gráfico de Latinoamérica ======================

  function initLatinAmericaChart() {
    const data = CO2Data.latinAmericaPerCapita.data;
    const container = document.getElementById('latin-america-chart');

    if (!container) return;

    data.sort((a, b) => b.co2PerCapita - a.co2PerCapita);

    const options = {
      series: [{
        name: 'Emisiones per cápita',
        data: data.map(item => ({
          x: item.country,
          y: item.co2PerCapita,
          fillColor: getTrendColor(item.trend),
          goals: [{
            name: 'Meta OMS',
            value: 2.0,
            strokeHeight: 2,
            strokeColor: '#82B358'
          }]
        }))
      }],
      chart: {
        type: 'bar',
        height: 450,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            pan: false,
            reset: true
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
          columnWidth: '70%',
          distributed: false
        }
      },
      colors: ['#185C9A'],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category',
        categories: data.map(item => item.country),
        title: {
          text: 'Países',
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          }
        },
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        title: {
          text: 'Toneladas de CO₂ per cápita',
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          }
        },
        min: 0,
        max: Math.max(...data.map(item => item.co2PerCapita)) + 1,
        labels: {
          formatter: function (val) {
            return val.toFixed(1);
          }
        }
      },
      tooltip: {
        custom: function ({ seriesIndex, dataPointIndex }) {
          const item = data[dataPointIndex];
          const percentage = ((item.co2PerCapita / 2.0) * 100 - 100).toFixed(0);
          return `
                    <div class="chart-tooltip">
                        <strong>${item.country} (${item.co2PerCapita.toFixed(1)} t CO₂)</strong>
                        <div>Total emisiones: ${item.co2.toLocaleString()} Mt</div>
                        <div>Tendencia: ${getTrendIcon(item.trend)}</div>
                        <div class="tooltip-comparison">${percentage > 0 ? '+' : ''}${percentage}% sobre meta OMS</div>
                    </div>
                `;
        }
      },
      annotations: {
        yaxis: [{
          y: 2.0,
          borderColor: '#82B358',
          strokeDashArray: 4,
          label: {
            borderColor: '#82B358',
            style: {
              color: '#fff',
              background: '#82B358',
              fontSize: '12px'
            },
            text: 'Meta OMS (2.0 t)'
          }
        }]
      }
    };

    if (window.latinAmericaChart) {
      window.latinAmericaChart.destroy();
    }

    window.latinAmericaChart = new ApexCharts(container, options);
    window.latinAmericaChart.render();
  }

  function getTrendColor(trend) {
    const colors = {
      '↑': '#E74C3C',
      '↓': '#82B358',
      '→': '#3498DB'
    };
    return colors[trend] || '#7F8C8D';
  }

  function getTrendIcon(trend) {
    const icons = {
      '↑': '↑',
      '↓': '↓',
      '→': '→'
    };
    return icons[trend] || trend;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLatinAmericaChart();

    window.addEventListener('resize', function () {
      if (window.latinAmericaChart) {
        window.latinAmericaChart.updateOptions({
          chart: {
            height: window.innerWidth < 768 ? 350 : 450
          }
        });
      }
    });
  });



  // ===================== Intensidad de carbono =========================

  function initCarbonIntensityChart() {
    const data = CO2Data.carbonIntensity.data;
    const container = document.getElementById('carbon-intensity-chart');

    if (!container) return;

    const options = {
      series: data.map(item => ({
        name: item.country,
        data: [[item.gdp, item.co2PerGdp]]
      })),
      chart: {
        type: 'scatter',
        height: 450,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors: ['#E74C3C', '#3498DB', '#82B358', '#9B59B6', '#F39C12'],
      xaxis: {
        type: 'numeric',
        title: { text: 'PIB (Billones USD)' },
        labels: {
          formatter: function (val) {
            return `$${val.toLocaleString()}`;
          }
        }
      },
      yaxis: {
        title: { text: 'Intensidad de Carbono (kg CO₂/USD)' },
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          }
        }
      },
      tooltip: {
        custom: function ({ seriesIndex, dataPointIndex }) {
          const item = data[seriesIndex];
          return `
            <div class="chart-tooltip">
              <strong>${item.country}</strong><br>
              <b>${item.co2PerGdp.toFixed(2)} kg CO₂/USD</b><br>
              PIB: $${item.gdp.toLocaleString()}B<br>
              Emisiones: ${item.co2.toLocaleString()} Mt
            </div>
          `;
        }
      }
    };

    new ApexCharts(container, options).render();
  }


  // ========== Cambio de Uso del Suelo ===================

  function initLandUseChart() {
    const data = CO2Data.landUseChange.data;
    const container = document.getElementById('land-use-chart');

    if (!container) return;

    const options = {
      series: [{
        name: 'Emisiones',
        data: data.map(item => item.emissions)
      }],
      chart: {
        type: 'bar',
        height: 400,
        toolbar: { show: true }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false
        }
      },
      colors: ['#9B59B6'],
      dataLabels: { enabled: false },
      xaxis: {
        categories: data.map(item => item.country),
        title: { text: 'Países' }
      },
      yaxis: {
        title: { text: 'Mt CO₂ por cambio de uso' }
      },
      tooltip: {
        y: {
          formatter: function (val, { dataPointIndex }) {
            const item = data[dataPointIndex];
            return `${val} Mt (${item.mainCause})`;
          }
        }
      }
    };

    new ApexCharts(container, options).render();
  }

  // ================  Fuentes de Energía  =============================

  function initEnergySourcesCharts() {
    const globalData = CO2Data.emissionsBySource.global;
    const countriesData = CO2Data.emissionsBySource.countries;

    const globalOptions = {
      series: Object.values(globalData),
      chart: {
        type: 'donut',
        height: 350
      },
      labels: ['Carbón', 'Petróleo', 'Gas', 'Cemento', 'Flaring', 'Otros'],
      colors: ['#34495E', '#E74C3C', '#3498DB', '#F39C12', '#1ABC9C', '#7F8C8D'],
      legend: {
        position: 'right'
      },
      tooltip: {
        y: {
          formatter: function (val) {
            const total = Object.values(globalData).reduce((a, b) => a + b, 0);
            return `${val.toLocaleString()} Mt (${((val / total) * 100).toFixed(1)}%)`;
          }
        }
      }
    };

    new ApexCharts(document.getElementById('energy-sources-global'), globalOptions).render();

    const countriesOptions = {
      series: [
        {
          name: 'Carbón',
          data: countriesData.map(c => c.sources.coal)
        },
        {
          name: 'Petróleo',
          data: countriesData.map(c => c.sources.oil)
        },
        {
          name: 'Gas',
          data: countriesData.map(c => c.sources.gas)
        }
      ],
      chart: {
        type: 'bar',
        height: 400,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4
        }
      },
      colors: ['#34495E', '#E74C3C', '#3498DB'],
      xaxis: {
        categories: countriesData.map(c => c.country)
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val.toLocaleString()} Mt`;
          }
        }
      }
    };

    new ApexCharts(document.getElementById('energy-sources-countries'), countriesOptions).render();
  }



  // ================  Consumo de Energía  =====================================

  function initEnergyConsumptionChart() {
    const data = CO2Data.energyConsumption;
    const container = document.getElementById('energy-consumption-chart');

    if (!container) return;

    const options = {
      series: [{
        name: 'Consumo',
        data: data.map(item => item.primaryEnergyConsumption / 1000)
      }],
      chart: {
        type: 'bar',
        height: 400,
        toolbar: { show: true }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false
        }
      },
      colors: ['#F39C12'],
      dataLabels: { enabled: false },
      xaxis: {
        categories: data.map(item => item.country),
        title: { text: 'Países' }
      },
      yaxis: {
        title: { text: 'Consumo (TWh)' }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val.toLocaleString()} TWh`;
          }
        }
      }
    };

    new ApexCharts(container, options).render();
  }


  // ===============   Participación Global emisiones ===================

  function initGlobalShareChart() {
    const data = CO2Data.globalShare;
    const container = document.getElementById('global-share-chart');

    if (!container) return;

    const options = {
      series: data.map(item => item.shareGlobalCo2),
      chart: {
        type: 'pie',
        height: 450
      },
      labels: data.map(item => item.country),
      colors: [
        '#E74C3C', '#3498DB', '#82B358', '#9B59B6',
        '#F39C12', '#1ABC9C', '#34495E', '#D35400',
        '#7F8C8D', '#27AE60', '#BDC3C7'
      ],
      legend: {
        position: 'right'
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val.toFixed(1)}%`;
          }
        }
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            width: '100%'
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    new ApexCharts(container, options).render();
  }


  // ==================== Tendencias Históricas  ===================

  function initHistoricalTrendsChart() {
    const worldData = CO2Data.historical.world;
    const regionsData = CO2Data.historical.regions;


    // ===============  Gráfico de emisiones totales  ============
    const emissionsOptions = {
      series: [
        {
          name: 'Mundo',
          data: worldData.co2Total
        },
        {
          name: 'Asia',
          data: regionsData.asia
        },
        {
          name: 'Norteamérica',
          data: regionsData.northAmerica
        },
        {
          name: 'Europa',
          data: regionsData.europe
        }
      ],
      chart: {
        type: 'line',
        height: 400,
        toolbar: { show: true }
      },
      colors: ['#E74C3C', '#3498DB', '#82B358', '#9B59B6'],
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      xaxis: {
        categories: worldData.years,
        title: { text: 'Año' }
      },
      yaxis: {
        title: { text: 'Emisiones (Mt CO₂)' },
        labels: {
          formatter: function (val) {
            return val.toLocaleString();
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val.toLocaleString()} Mt`;
          }
        }
      }
    };

    new ApexCharts(document.getElementById('historical-emissions-chart'), emissionsOptions).render();



    // ====================== emisiones per cápita ==============================

    const perCapitaOptions = {
      series: [{
        name: 'Emisiones per cápita',
        data: worldData.co2PerCapita
      }],
      chart: {
        type: 'line',
        height: 350
      },
      colors: ['#185C9A'],
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      xaxis: {
        categories: worldData.years,
        title: { text: 'Año' }
      },
      yaxis: {
        title: { text: 'Toneladas per cápita' },
        labels: {
          formatter: function (val) {
            return val.toFixed(1);
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val.toFixed(1)} t`;
          }
        }
      }
    };

    new ApexCharts(document.getElementById('historical-percapita-chart'), perCapitaOptions).render();

    initYearRangeSlider(worldData.years);
  }




  // ============================================
  //        FUNCIONES AUXILIARES 
  // ============================================


  function initYearRangeSlider(years) {
    const yearRange = document.getElementById('year-range');
    const yearValue = document.getElementById('year-range-value');

    if (!yearRange) return;

    if (yearRange.noUiSlider) {
      yearRange.noUiSlider.updateOptions({
        range: {
          'min': years[0],
          'max': years[years.length - 1]
        }
      });
      return;
    }

    noUiSlider.create(yearRange, {
      start: [years[0], years[years.length - 1]],
      connect: true,
      range: {
        'min': years[0],
        'max': years[years.length - 1]
      },
      step: 1,
      tooltips: [true, true],
      format: {
        to: function (value) {
          return Math.round(value);
        },
        from: function (value) {
          return Number(value);
        }
      }
    });

    yearRange.noUiSlider.on('update', function (values) {
      yearValue.textContent = `${values[0]} - ${values[1]}`;
    });
  }

  function setupEventListeners() {
    const energyViewSelect = document.getElementById('energy-view-select');
    if (energyViewSelect) {
      energyViewSelect.addEventListener('change', function () {
        const globalChart = document.getElementById('energy-sources-global');
        const countriesChart = document.getElementById('energy-sources-countries');

        if (this.value === 'global') {
          globalChart.style.display = 'block';
          countriesChart.style.display = 'none';
        } else {
          globalChart.style.display = 'none';
          countriesChart.style.display = 'block';
        }
      });
    }
  }


  function showErrorAlert() {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px;
      background: #e74c3c;
      color: white;
      border-radius: 5px;
      z-index: 1000;
    `;
    alertDiv.textContent = 'Error al cargar los gráficos. Recarga la página.';
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.style.display = 'none';
    }, 5000);
  }

  function getTrendColor(trend) {
    const colors = {
      '↑↑': '#E74C3C',
      '↑': '#F39C12',
      '→': '#3498DB',
      '↓': '#82B358',
      '↓↓': '#1ABC9C'
    };
    return colors[trend] || '#7F8C8D';
  }


  function getTrendIcon(trend) {
    const icons = {
      '↑↑': '↑↑',
      '↑': '↑',
      '→': '→',
      '↓': '↓',
      '↓↓': '↓↓'
    };
    return icons[trend] || trend;
  }


  function updateTable(tableId, rows) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const tbody = table.querySelector('tbody') || table.createTBody();
    tbody.innerHTML = '';

    rows.forEach(rowData => {
      const tr = document.createElement('tr');
      rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.textContent = cellData;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }
});




