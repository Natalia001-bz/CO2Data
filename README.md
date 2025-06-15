# CO2Data
## Plataforma de Visualización de Emisiones de CO₂ 🌍

## Introducción 
CO2Data es una plataforma web interactiva diseñada para democratizar el acceso a datos científicos sobre emisiones de CO₂ y gases de efecto invernadero. Desarrollada como herramienta estratégica para la educación ambiental y la toma de decisiones informadas, integra visualizaciones intuitivas con información actualizada de fuentes oficiales como **Our World in Data** y el **Banco Mundial**.

## Objetivos
### General
Facilitar el análisis comparativo de emisiones a través de una interfaz accesible para ciudadanos, instituciones educativas y organizaciones gubernamentales.

### Específicos
- Visualizar tendencias históricas (1960-actualidad)
- Comparar datos por país/región en tiempo real
- Generar informes descargables para fines educativos

## 🛠️ Arquitectura Técnica

### Frontend
| Componente       | Tecnología           | Detalles                          |
|-------------------|----------------------|-----------------------------------|
| Gráficos         | ApexCharts.js        | Interactividad y animaciones      |
| Diseño Responsivo| HTML5/CSS3           | Grid/Flexbox para layouts         |
| Lógica           | JavaScript ES6+      | Manejo dinámico de datasets       |
| Estilos          | Sass                 | Variables reutilizables           |

### Backend
                         |
|---------------------|---------------------------|----------------------------------------------------|
| Framework Principal | Spring Boot 3.2           | Configuración autoembebida con Spring Initializr  |
| ORM                 | Spring Data JPA           | Mapeo objeto-relacional con Hibernate 6.4         |
| Base de Datos       | MySQL 8.0                 | Configuración InnoDB con transacciones ACID       |
| V                   | Maven                     |                                                   |


## 🔌 Instalación y Configuración

### Requisitos Previos
- JDK 17 o superior
- MySQL 8.0+ con privilegios de root
- Node.js 18.x (para compilación de assets)
- Maven 3.9+

### Pasos de Implementación

1. **Clonación del Repositorio**
git clone https://github.com/Natalia001-bz/CO2Data.git && cd CO2Data


## 👥 Equipo de Desarrollo
| Nombre                         |    | LinkedIn          |
|--------------------------------|----|-------------------|
| Natalia Berrio Zuleta          |    | [Enlace LinkedIn] |
| María Luisa Escobar Rojo       |    | [Enlace LinkedIn] |
| Carlos Arturo Gallego Maya     |    | [Enlace LinkedIn] |
| Lucas Esteban Mendoza Echeverri|    | [Enlace LinkedIn] |



### 🌐 Fuentes de Datos
- [Our World in Data - CO₂ Emissions](https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions)[1][4]
- [Banco Mundial - Data360](https://data360.worldbank.org/en/dataset/OWID_CB)[1]


*Desarrollado como proyecto integrador para el programa Talento Tech 2025*
