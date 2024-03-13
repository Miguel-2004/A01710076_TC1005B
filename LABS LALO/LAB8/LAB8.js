console.log("hola mundo desde node");

// 1. Una función que reciba un arreglo de números y devuelva su promedio.

function calcularPromedio(numeros) {
  const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  return suma / numeros.length;
}
const arreglo = [5, 10, 15, 20];
const promedio = calcularPromedio(arreglo);
console.log('El promedio del arreglo es:', promedio);

//2. Una función que reciba un string y escriba el string en un archivo de texto. 

const fs = require('fs');
function escribirEnArchivo(texto, nombreArchivo){
  fs.writeFile(nombreArchivo, texto,(error)=>{
    if (error) {
      console.error('Error al escribir el archivo: ', error);
    } else {
      console.log('El texto se ha descritocorrectamente en el archivo: ', nombreArchivo);
    }

  });
}
const textoAEscribir = 'Este es un texto que será escrito en un archivo. ';
const nombreDelArchivo ='archivo.txt';
escribirEnArchivo(textoAEscribir, nombreDelArchivo);

// 3. Problema de números primos resuelto en JS

function esPrimo(numero){
  if (numero <=1){
    return false;
  }

  for (let i=2; i<= Math.sqrt(numero); i++){
    if (numero %1 === 0){
      return  false;
    }
  }
  return true;
}

const numero =17;
if (esPrimo(numero)){
  console.log(numero + 'es primo. ');
} else {
  console.log(numero +'no es primo. ');
}


//http es un módulo de node con todas las funciones de un servidor web
const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');

    response.write(`<html lang="es">
    <head>
      <title>Miguel Angel Becerra Ayala</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <!-- Importar íconos de Materialize -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <!-- Importar hoja de estilos de Materialize -->
    </head>
    
    <body>
      <nav>
        <div class="nav-wrapper teal">
          <a href="#" class="brand-logo">MY PERSONAL PAGE</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#"><i class="material-icons">search</i></a></li>
            <li><a href="#"><i class="material-icons">view_module</i></a></li>
            <li><a href="#"><i class="material-icons">refresh</i></a></li>
            <li><a href="#"><i class="material-icons">more_vert</i></a></li>
          </ul>
        </div>
      </nav>
    
      <div class="container">
        <h1 class="center-align">HOLA BIENVENIDO !!</h1>
        <h2 class="center-align">ME PUEDES DECIR MIGUE</h2> 
        
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Sobre mí</span>
                <p>Me llamo Miguel Angel Becerra Ayala, tengo 20 años, estoy en el cuarto semestre de Ingenieria en Tecnologias Computacionales, soy originario de San Juan del Río. Soy una persona muy social y que siempre busca el bien común. </p>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Mis gustos</span>
                <p>Me gusta nadar. Fui competidor durante cerca de 3 años, donde gané 2 campeonatos estatales y participé en 2 competencias nacionales. Además consurse en distintas competencias de oratoria, obteniendo 2 primeros lugares en competencias estatales y un cuarto lugar en competencia nacional. Amo armar rompecabezas. </p>
              </div>
            </div>
          </div>
        </div>
    
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Matricula</span>
                <p>A01710076</p>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Número Telefónico</span>
                <p>+52 427 107 5928</p>
              </div>
            </div>
          </div>
        </div>
    
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Correo</span>
                <p><a href="mailto:A01710076@tec.mx">A01710076@tec.mx</a></p>
              </div>
            </div>
          </div>
        </div>
    
        <div class="row">
          <div class="col s12 m4">
            <img src="https://via.placeholder.com/400" class="responsive-img" alt="Imagen de ejemplo">
          </div>
          <div class="col s12 m4">
            <img src="https://via.placeholder.com/400" class="responsive-img" alt="Imagen de ejemplo">
          </div>
          <div class="col s12 m4">
            <img src="https://via.placeholder.com/400" class="responsive-img" alt="Imagen de ejemplo">
          </div>
        </div>
    
        <div class="row">
          <div class="col s12 m4">
            <img src="https://via.placeholder.com/400" class="responsive-img" alt="Imagen de ejemplo">
          </div>
          <div class="col s12 m4">
            <img src="https://via.placeholder.com/400" class="responsive-img" alt="Imagen de ejemplo">
          </div>
          <div class="col s12 m4">
            <img src="https://via.placeholder.com/400" class="responsive-img" alt="Imagen de ejemplo">
          </div>
        </div>
    
        <div class="row">
          <div class="col s12">
            <ul class="collection">
              <li class="collection-item">Natación</li>
              <li class="collection-item">Competencias</li>
              <li class="collection-item">Oratoria</li>
              <li class="collection-item">Rompecabezas</li>
              <li class="collection-item">Programación</li>
            </ul>
          </div>
        </div>
    
        <div class="row">
          <div class="col s12">
            <ul class="collapsible">
              <li>
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>Natación</div>
                <div class="collapsible-body"><span>Mi deporte favorito es la natación, estuve paracticándola por cerca de 7 años, asistiendo a multiples competencias y obteniendo el primer lugar en 2 competencias estatales y asisitiendo a 2 competencias nacionales, en verdad para mi la natación es mi máximo, desafortunadamente tuve que dejarla de practicar por problemas de salud.</span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>Programación</div>
                <div class="collapsible-body"><span>Aunque mi aprendizaje lo considero más lento que el resto de las personas, me encanta programar, se diferntes lenguajes como: Java, C++, CSS, HTML, MySQL, Arduino y más, un dato curioso es que gracias a HTML me di cuenta que en realidad me apasionaba la programación y que era a lo que me quería dedicar el resto de mis días.</span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>Más sobre mi </div>
                <div class="collapsible-body"><span>En relidad soy una persona muy social, aunque aveces me cuesta adaptarme a diferentes entornos, otra cosa que me gusta es la oratoria, participe en distintas competencias, algo que me caracteriza es el que soy muy perseverante y que me gusta mucho siempre dar lo mejor de mi.</span></div>
              </li>
            </ul>
          </div>
        </div>
    
        <div class="row">
          <div class="col s12">
            <div class="card-panel teal">
              <span class="white-text">Mis Redes Sociales </span>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col s12">
            <div class="card-panel orange">
              <span class="white-text">Dato curioso mi color favorito es el naranje</span>
            </div>
          </div>
        </div>
    
        <div class="row">
          <div class="col s12">
            <div class="card-panel blue">
              <span class="white-text">Siempre confía en el proceso Dios te tiene grandes cosas preparadas para ti</span>
            </div>
          </div>
        </div>
      </div>
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> <!-- Importar script de Materialize -->
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.collapsible');
          var instances = M.Collapsible.init(elems);
        });
      </script>
    </body>
    </html>
    `);
    response.end();
});
server.listen(3000);
