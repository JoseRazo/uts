# Universidad Tecnológica de Salamanca

<img src="http://www.utsalamanca.edu.mx/assets/img/pagina-principal/logouts.png" style="width: 220px;" alt="Universidad Tecnológica de Salamanca">

La Universidad Tecnológica de Salamanca, es una universidad pública del municipio de Salamanca, Guanajuato. Forma parte de la Coordinación General de Universidades Tecnológicas y Politécnicas, cuya misión es la de formar profesionistas de nivel Técnico Superior Universitario y de nivel Licenciatura,a través de programas educativos pertinentes y de calidad, además de certificarlos en competencias laborales y profesionales que, satisfagan las necesidades de los sectores productivo y social, para fomentar el desarrollo social y económico de la Región, del Estado y del País.

## Pre-requisitos

- Instalar [Docker.](https://www.docker.com/get-started)
- Instalar [Docker Compose.](https://docs.docker.com/compose/install/)

## Instalación

- Clonar repositorio `git clone https://github.com/JoseRazo/uts.git`
- Crear imagen docker **`docker compose build`**
- Crear contenedor **`docker compose up -d`**
- Abrir navegador y entrar a URL [127.0.0.1:4200](http://127.0.0.1:4200)

## Subir cambios del proyecto a servidor de producción

- Entrar al contenedor `docker exec -i -t uts-web-1 /bin/sh`
- Compilar el codigo **`ng build --prod --build-optimizer --base-href=./`**
- Subir archivos de la carpeta /dist/UTS/ al servidor de producción

##
<p style="color:yellow">Si te gusta nuestro proyecto por favor deja una estrella ☆<p>