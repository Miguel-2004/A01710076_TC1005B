const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/') {
        // Página de inicio
        res.setHeader('Content-Type', 'text/html');
        const indexPage = `
        <!DOCTYPE html>
        <html lang="es">
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
                <li><a href="#">Inicio</a></li>
                <li><a href="/about">Acerca de</a></li>
                <li><a href="/contact">Contacto</a></li>
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
        `;
        res.end(indexPage);
    } else if (url === '/about') {
        // Página "Acerca de"
        res.setHeader('Content-Type', 'text/html');
        const aboutPage = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Acerca de</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <section class="section">
                <div class="container">
                    <h1 class="title">MÁS SOBRE MI :)</h1>
                    <p class="subtitle">Soy Migue. Conoce más sobre mi !!.</p>
                    <!-- Enlaces a redes sociales -->
                    <div class="buttons">
                        <a href="https://www.instagram.com/miguel_becerra_a?igsh=MTZkaGY4cTU3OWJoNA%3D%3D&utm_source=qr" target="_blank" class="button is-primary">Instagram</a>
                        <a href="https://www.facebook.com/miguelangel.becerraayala.3?mibextid=opq0tG" target="_blank" class="button is-primary">Facebook</a>
                    </div>
                    <!-- Espacio para la música que te gusta -->
                    <div class="box">
                        <h2 class="subtitle">Mis gustos musicales</h2>
                        <p>Me gusta mucho la electrónica y la música urbana latino, aunque lo admito me se muchas canciones de señora, gracias a mi mamá, escuchar música siempre me pone de buenas y si es una canción para bailar más aún..</p>
                        <figure class="image is-4by3">
                            <img src="ruta/a/la/imagen/musica.jpg" alt="Imagen de música">
                        </figure>
                    </div>
                    <!-- Espacio para hablar sobre tu familia -->
                    <div class="box">
                        <h2 class="subtitle">Mi familia</h2>
                        <p>Tengo una familia espectacular, me encanta pasar momentos agradables a su lado y compartir momentos únicos con ellos, siempre seran lo mejor de mi vida.</p>
                        <figure class="image is-4by3">
                            <img src="ruta/a/la/imagen/familia.jpg" alt="Imagen de familia">
                        </figure>
                    </div>
                    <!-- Botón para regresar a la página principal -->
                    <a href="/" class="button">Volver a la página principal</a>
                </div>
            </section>
        </body>
        </html>
        `;
        res.end(aboutPage);
    } else if (url === '/contact' && method === 'GET') {
        // Página de contacto
        res.setHeader('Content-Type', 'text/html');
        const contactPage = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Contacto</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <section class="section">
                <div class="container">
                    <h1 class="title">Contáctame</h1>
                    <form action="/contact" method="POST">
                        <div class="field">
                            <label class="label">Nombre</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Tu nombre" name="name">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Correo electrónico</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="Tu correo electrónico" name="email">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Mensaje</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Tu mensaje" name="message"></textarea>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                    <!-- Botón para regresar a la página principal -->
                    <a href="/" class="button">Volver a la página principal</a>
                </div>
            </section>
        </body>
        </html> 
        `;
        res.end(contactPage);

    } else if (url === '/contact' && method === 'POST') {
        // Procesamiento del formulario de contacto
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            // Guardar los datos del formulario en un archivo
            fs.appendFile('contact_data.txt', body + '\n', err => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Error al guardar los datos');
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<h1>¡Gracias por tu mensaje!</h1>');
                }
            });
        });
    } else {
        // Ruta no encontrada
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});