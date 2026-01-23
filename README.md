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
|------------------|----------------------|-----------------------------------|
| Gráficos         | ApexCharts.js        | Interactividad y animaciones      |
| Diseño Responsivo| HTML5/CSS3           | Grid/Flexbox para layouts         |
| Lógica           | JavaScript ES6+      | Manejo dinámico de datasets       |
| Estilos          | Sass                 | Variables reutilizables           |

### Backend
|Lenguaje principal   | Java (JDK)                | Arquitectura MVC- modelo vista controlador                         
|---------------------|---------------------------|---------------------------------------------------|
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
git clone https://github.com/Natalia001-bz/CO2Data.git

configuracion de IDE y dependencias Para Java Spring Boot.


## 👥 Equipo de Desarrollo
| Nombre                         |    | [Linkedin](https://www.linkedin.com/in/natalia-berrio-zuleta/)       |
|--------------------------------|----|-------------------|
| Lucas Esteban Mendoza Echeverri|    |  LinkedIn         |
| María Luisa Escobar Rojo       |    |  LinkedIn         |
| Carlos Arturo Gallego Maya     |    |  LinkedIn         |
| Natalia Berrio Zuleta          |    |  LinkedIn         |



### 🌐 Fuentes de Datos
- [Our World in Data - CO₂ Emissions](https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions)
- [Banco Mundial - Data360](https://data360.worldbank.org/en/dataset/OWID_CB)


*Desarrollado como proyecto integrador para el programa Talento Tech 2025*
