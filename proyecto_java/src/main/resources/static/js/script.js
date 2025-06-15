//=============  Función para mostrar el menú de navegación al hacer scroll hacia abajo ======//
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
  });
});


// ===========  Función para mostrar el menú lateral al hacer click en el icono de menú ======//



const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close_btn");


const themeToggler = document.querySelector(".theme_toggler");

menuBtn.addEventListener("click", () => {
sideMenu.style.display = "block";
})
closeBtn.addEventListener("click", () => {
sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
   
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

//   if (document.body.classList.contains("dark-theme")) {
//     themeToggler.querySelector("i").classList.remove("fa-sun");
//     themeToggler.querySelector("i").classList.add("fa-moon");
//   } else {
//     themeToggler.querySelector("i").classList.remove("fa-moon");
//     themeToggler.querySelector("i").classList.add("fa-sun");
//   }
});

// ===========  Función para cambiar el tema oscuro y claro ======//    





















// ===========  Función para ampliar imágen de blog icono Lupa y redirigir al blog ======//
document.addEventListener("DOMContentLoaded", function () {
  amplifyImg();
});

function amplifyImg() {
  const magnifyIcons = document.querySelectorAll(".fa-magnifying-glass");

  magnifyIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const card = this.closest(".card-blog");
      const imgSrc = card.querySelector(".container-imgb img").src;

      showAmplifyImg(imgSrc);
    });
  });

  function showAmplifyImg(src) {
    const modal = document.createElement("div");
    modal.classList.add("image-modal-blog");
    modal.innerHTML = `
            <div class="image-modal-content">
              <a href="https://www.agropinos.com/blog/agricultura-y-cuidado-medioambiental"> <img src="${src}" alt="Imagen ampliada"> </a>
            </div>
        `;

    document.body.appendChild(modal);

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeAmplifyImg();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAmplifyImg();
      }
    });

    function closeAmplifyImg() {
      modal.classList.add("fade-out");
      setTimeout(() => modal.remove(), 300);
    }
  }
}
//======================================================


 // ======  Navegación de Blogs =========
  const blogCards = document.querySelectorAll(".card-blog");
  blogCards.forEach((card) => {
    const blogClass = Array.from(card.classList).find((className) =>
      className.startsWith("blog-")
    );
    if (blogClass) {
      const linkElements = card.querySelectorAll(
        "h3, .btn-read-more, .fa-link"
      );
      linkElements.forEach((element) => {
        element.addEventListener("click", () => {
          // window.location.href = `../HTML/blog.html#${blogClass}`;
          window.location.href = "../HTML/blog.html";
        });
      });
    }
  });
//======================================================














//=============================Prueba 


// Datos de ejemplo basados en tu estructura SQL
const co2Data = {
    "countries": [
        {"iso_code": "AFG", "name": "Afganistán", "color": "#3498db"},
        {"iso_code": "USA", "name": "Estados Unidos", "color": "#e74c3c"},
        {"iso_code": "CHN", "name": "China", "color": "#2ecc71"},
        {"iso_code": "IND", "name": "India", "color": "#f39c12"},
        {"iso_code": "BRA", "name": "Brasil", "color": "#9b59b6"},
        {"iso_code": "DEU", "name": "Alemania", "color": "#1abc9c"},
        {"iso_code": "MEX", "name": "México", "color": "#d35400"},
        {"iso_code": "ZAF", "name": "Sudáfrica", "color": "#34495e"}
    ],
    "indicators": [
        {"id": "co2", "name": "Emisiones totales de CO2 (Mt)"},
        {"id": "co2_per_capita", "name": "Emisiones per cápita (t)"},
        {"id": "co2_per_gdp", "name": "Intensidad de CO2 (kg/$)"},
        {"id": "coal_co2", "name": "Emisiones de carbón (Mt)"},
        {"id": "oil_co2", "name": "Emisiones de petróleo (Mt)"},
        {"id": "gas_co2", "name": "Emisiones de gas (Mt)"}
    ],
    "data": [
        // Datos de ejemplo para Afganistán (basados en tu SQL)
        {"year": 1950, "iso_code": "AFG", "co2": 2.993, "co2_per_capita": 0.168, "co2_per_gdp": 1.981, "coal_co2": 0.797, "oil_co2": 0.958, "gas_co2": 0.224},
        {"year": 1960, "iso_code": "AFG", "co2": 6.25, "co2_per_capita": 0.168, "co2_per_gdp": 1.99, "coal_co2": 0.8, "oil_co2": 0.959, "gas_co2": 0.229},
        {"year": 1970, "iso_code": "AFG", "co2": 12.247, "co2_per_capita": 0.169, "co2_per_gdp": 2.005, "coal_co2": 0.803, "oil_co2": 0.961, "gas_co2": 0.234},
        {"year": 1980, "iso_code": "AFG", "co2": 17.857, "co2_per_capita": 0.169, "co2_per_gdp": 2.011, "coal_co2": 0.803, "oil_co2": 0.962, "gas_co2": 0.238},
        {"year": 1990, "iso_code": "AFG", "co2": 21.335, "co2_per_capita": 0.169, "co2_per_gdp": 2.017, "coal_co2": 0.802, "oil_co2": 0.965, "gas_co2": 0.242},
        {"year": 2000, "iso_code": "AFG", "co2": 24.437, "co2_per_capita": 0.169, "co2_per_gdp": 2.022, "coal_co2": 0.8, "oil_co2": 0.966, "gas_co2": 0.246},
        {"year": 2010, "iso_code": "AFG", "co2": 27.548, "co2_per_capita": 0.17, "co2_per_gdp": 2.027, "coal_co2": 0.799, "oil_co2": 0.966, "gas_co2": 0.249},
        {"year": 2020, "iso_code": "AFG", "co2": 30.668, "co2_per_capita": 0.17, "co2_per_gdp": 2.032, "coal_co2": 0.797, "oil_co2": 0.967, "gas_co2": 0.252},
        
        // Datos de ejemplo para otros países (simulados)
        {"year": 1950, "iso_code": "USA", "co2": 1200, "co2_per_capita": 8.5, "co2_per_gdp": 1.2, "coal_co2": 600, "oil_co2": 400, "gas_co2": 200},
        {"year": 1960, "iso_code": "USA", "co2": 1800, "co2_per_capita": 10.2, "co2_per_gdp": 1.1, "coal_co2": 800, "oil_co2": 700, "gas_co2": 300},
        // ... más datos para otros países y años
    ]
};

// Función para inicializar la visualización
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar selects
    initCountrySelect();
    initIndicatorSelect();
    
    // Inicializar rango de años
    initYearRange();
    
    // Configurar evento para actualizar visualización cuando cambian los filtros
    setupFilterEvents();
    
    // Cargar visualización inicial
    updateVisualization();
});

function initCountrySelect() {
    const select = document.getElementById('country-select');
    
    // Agregar opciones de países
    co2Data.countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.iso_code;
        option.textContent = country.name;
        
        // Seleccionar algunos países por defecto
        if (['AFG', 'USA', 'CHN'].includes(country.iso_code)) {
            option.selected = true;
        }
        
        select.appendChild(option);
    });
}

function initIndicatorSelect() {
    const select = document.getElementById('indicator-select');
    
    // Agregar opciones de indicadores
    co2Data.indicators.forEach(indicator => {
        const option = document.createElement('option');
        option.value = indicator.id;
        option.textContent = indicator.name;
        select.appendChild(option);
    });
    
    // Seleccionar el primer indicador por defecto
    select.value = 'co2';
}

function initYearRange() {
    // Obtener años mínimos y máximos de los datos
    const years = [...new Set(co2Data.data.map(item => item.year))].sort((a, b) => a - b);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    
    // Configurar el slider con noUiSlider
    const slider = document.getElementById('year-range');
    noUiSlider.create(slider, {
        start: [minYear, maxYear],
        connect: true,
        range: {
            'min': minYear,
            'max': maxYear
        },
        step: 1,
        tooltips: [true, true],
        format: {
            to: function(value) {
                return Math.round(value);
            },
            from: function(value) {
                return Number(value);
            }
        }
    });
    
    // Actualizar el texto del rango de años
    slider.noUiSlider.on('update', function(values) {
        document.getElementById('year-value').textContent = `${values[0]}-${values[1]}`;
    });
}

function setupFilterEvents() {
    // Actualizar visualización cuando cambian los filtros
    document.getElementById('country-select').addEventListener('change', updateVisualization);
    document.getElementById('indicator-select').addEventListener('change', updateVisualization);
    document.getElementById('year-range').noUiSlider.on('set', updateVisualization);
}

function updateVisualization() {
    // Obtener selecciones del usuario
    const selectedCountries = Array.from(document.getElementById('country-select').selectedOptions)
        .map(option => option.value);
    const selectedIndicator = document.getElementById('indicator-select').value;
    const yearRange = document.getElementById('year-range').noUiSlider.get();
    const minYear = parseInt(yearRange[0]);
    const maxYear = parseInt(yearRange[1]);
    
    // Filtrar datos según selecciones
    const filteredData = co2Data.data.filter(item => 
        selectedCountries.includes(item.iso_code) && 
        item.year >= minYear && 
        item.year <= maxYear
    );
    
    // Preparar datos para el gráfico y la tabla
    prepareChartData(filteredData, selectedCountries, selectedIndicator);
    prepareTableData(filteredData, selectedIndicator);
}

function prepareChartData(data, selectedCountries, indicator) {
    const series = [];
    const categories = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);
    
    // Agrupar datos por país
    selectedCountries.forEach(isoCode => {
        const country = co2Data.countries.find(c => c.iso_code === isoCode);
        const countryData = data.filter(item => item.iso_code === isoCode);
        
        // Ordenar datos por año y mapear valores
        const sortedData = countryData.sort((a, b) => a.year - b.year);
        const values = sortedData.map(item => item[indicator]);
        
        series.push({
            name: country.name,
            data: values,
            color: country.color
        });
    });
    
    // Renderizar gráfico
    renderChart(series, categories, indicator);
}

function renderChart(series, categories, indicator) {
    const chartOptions = {
        series: series,
        chart: {
            type: 'line',
            height: 500,
            animations: {
                enabled: true
            },
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true
                }
            }
        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 5,
            hover: {
                size: 7
            }
        },
        xaxis: {
            categories: categories,
            title: {
                text: 'Año'
            }
        },
        yaxis: {
            title: {
                text: co2Data.indicators.find(i => i.id === indicator).name
            },
            labels: {
                formatter: function(value) {
                    return formatValue(value, indicator);
                }
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(value) {
                    return formatValue(value, indicator);
                }
            }
        },
        legend: {
            position: 'top'
        },
        dataLabels: {
            enabled: false
        }
    };
    
    // Renderizar o actualizar gráfico
    const chartElement = document.getElementById('co2-chart');
    if (window.co2Chart) {
        window.co2Chart.updateOptions(chartOptions);
    } else {
        window.co2Chart = new ApexCharts(chartElement, chartOptions);
        window.co2Chart.render();
    }
}

function prepareTableData(data, indicator) {
    const tableBody = document.querySelector('#co2-table tbody');
    tableBody.innerHTML = '';
    
    // Ordenar datos por año y país
    data.sort((a, b) => a.year - b.year || a.iso_code.localeCompare(b.iso_code));
    
    // Agregar filas a la tabla
    data.forEach(item => {
        const country = co2Data.countries.find(c => c.iso_code === item.iso_code);
        const indicatorName = co2Data.indicators.find(i => i.id === indicator).name;
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${country.name}</td>
            <td>${indicatorName}</td>
            <td>${formatValue(item[indicator], indicator)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function formatValue(value, indicator) {
    // Formatear el valor según el tipo de indicador
    if (indicator === 'co2_per_capita') {
        return value.toFixed(2) + ' t';
    } else if (indicator === 'co2_per_gdp') {
        return value.toFixed(2) + ' kg/$';
    } else if (indicator.includes('co2') || indicator.includes('coal') || 
               indicator.includes('oil') || indicator.includes('gas')) {
        return value.toLocaleString(undefined, {maximumFractionDigits: 2}) + ' Mt';
    }
    return value;
}