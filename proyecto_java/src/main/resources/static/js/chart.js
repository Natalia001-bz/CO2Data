document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el slider de años
    const yearSlider = document.getElementById('year-range');
    const yearValue = document.getElementById('year-value');
    
    noUiSlider.create(yearSlider, {
        start: [2020],
        connect: true,
        range: {
            'min': 1960,
            'max': 2020
        },
        step: 1,
        tooltips: [wNumb({decimals: 0})],
        format: wNumb({
            decimals: 0
        })
    });
    
    yearSlider.noUiSlider.on('update', function(values) {
        yearValue.textContent = values[0];
    });
    
    // Cargar datos iniciales
    loadCharts(2020);
    
    // Configurar evento para el botón de aplicar filtros
    document.getElementById('apply-filters').addEventListener('click', function() {
        const year = parseInt(yearSlider.noUiSlider.get());
        loadCharts(year);
    });
});

function loadCharts(year) {
    updateTop10Chart(year);
    updateLatinAmericaChart(year);
    updateCarbonIntensityChart(year);
    updateLandUseChart(year);
    updateEnergySourcesChart(year);
    updateEnergyConsumptionChart(year);
    updateGlobalShareChart(year);
}

// Funciones específicas para cada gráfico (similar al código anterior, pero ajustado a tu diseño)
function updateTop10Chart(year) {
    fetch(`/api/co2/top10`)
        .then(response => response.json())
        .then(data => {
            const options = {
                series: [{
                    name: 'Emisiones de CO2',
                    data: data.map(item => item.co2)
                }],
                chart: {
                    type: 'bar',
                    height: '100%',
                    toolbar: { show: true }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: { enabled: false },
                xaxis: {
                    categories: data.map(item => item.country),
                    title: { text: 'Emisiones de CO2 (Mt)' }
                },
                colors: [getComputedStyle(document.documentElement).getPropertyValue('--clr-primary').trim()]
            };
            
            new ApexCharts(document.querySelector("#top10-chart"), options).render();
            
            // Actualizar tabla
            const tableBody = document.querySelector("#top10-table tbody");
            tableBody.innerHTML = '';
            
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.country}</td>
                    <td>${item.co2 ? item.co2.toFixed(2) : 'N/A'}</td>
                    <td>${item.co2PerCapita ? item.co2PerCapita.toFixed(2) : 'N/A'}</td>
                    <td>${item.year}</td>
                `;
                tableBody.appendChild(row);
            });
        });
}

// ... otras funciones de actualización de gráficos ...