const http = require('http');
const fs = require('fs');

// Archivos HTML incrustados
const indexPage = `
<!DOCTYPE html>
<html lang="es">
<head>
    <title>Miguel Angel Becerra Ayala</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <style>
        body {
            background-color: #f0f0f0;
        }
        .container {
            padding: 20px;
        }
        .card-panel {
            color: white;
        }
    </style>
</head>
<body>
    <nav>
        <div class="nav-wrapper teal">
            <a href="#" class="brand-logo">MY PERSONAL PAGE</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Acerca de</a></li>
                <li><a href="/contact">Contacto</a></li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <h1 class="center-align">¡HOLA, BIENVENIDO!</h1>
        <h2 class="center-align">Puedes llamarme Migue</h2>
        <div class="row">
            <div class="col s12 m6">
                <div class="card-panel teal">
                    <span class="white-text">Sobre mí</span>
                    <p>¡Hola! Soy Miguel Angel Becerra Ayala. Tengo 20 años y actualmente estudio Ingeniería en Tecnologías Computacionales. Soy originario de San Juan del Río y me considero una persona muy sociable que siempre busca el bien común.</p>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card-panel teal">
                    <span class="white-text">Mis Gustos</span>
                    <p>Me apasiona la natación. Durante 3 años competí en varios eventos, ganando 2 campeonatos estatales y participando en competencias nacionales. También disfruto la oratoria y armar rompecabezas.</p>
                </div>
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
                        <div class="collapsible-body"><span>Disfruto mucho nadar. Estuve practicándolo durante 7 años, obteniendo el primer lugar en 2 competencias estatales y asistiendo a 2 competencias nacionales. Lamentablemente, tuve que dejarlo debido a problemas de salud.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Programación</div>
                        <div class="collapsible-body"><span>Aunque considero que mi aprendizaje es más lento que el de otras personas, me encanta programar. Conozco varios lenguajes como Java, C++, CSS, HTML, MySQL, Arduino y más. Gracias a HTML descubrí mi pasión por la programación y decidí dedicarme a ello.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Más sobre mí</div>
                        <div class="collapsible-body"><span>Soy una persona muy sociable, aunque a veces me cuesta adaptarme a diferentes entornos. Me caracterizo por ser perseverante y siempre dar lo mejor de mí en todo lo que hago.</span></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div class="card-panel teal">
                    <span class="white-text">Mis Redes Sociales</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div class="card-panel orange">
                    <span class="white-text">Dato curioso: mi color favorito es el naranja</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div class="card-panel blue">
                    <span class="white-text">Siempre confía en el proceso. ¡Dios tiene grandes cosas preparadas para ti!</span>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems);
        });
    </script>
</body>
</html>
`;

// Archivos HTML adicionales
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
            <div class="buttons">
                <a href="https://www.instagram.com/miguel_becerra_a?igsh=MTZkaGY4cTU3OWJoNA%3D%3D&utm_source=qr" target="_blank" class="button is-primary">Instagram</a>
                <a href="https://www.facebook.com/miguelangel.becerraayala.3?mibextid=opq0tG" target="_blank" class="button is-primary">Facebook</a>
            </div>
            <div class="box">
                <h2 class="subtitle">Mis gustos musicales</h2>
                <p>Me gusta mucho la electrónica y la música urbana latino, aunque lo admito me se muchas canciones de señora, gracias a mi mamá, escuchar música siempre me pone de buenas y si es una canción para bailar más aún..</p>
                <figure class="image is-4by3">
                    <img src="ruta/a/la/imagen/musica.jpg" alt="Imagen de música">
                </figure>
            </div>
            <div class="box">
                <h2 class="subtitle">Mi familia</h2>
                <p>Tengo una familia espectacular, me encanta pasar momentos agradables a su lado y compartir momentos únicos con ellos, siempre seran lo mejor de mi vida.</p>
                <figure class="image is-4by3">
                    <img src="ruta/a/la/imagen/familia.jpg" alt="Imagen de familia">
                </figure>
            </div>
            <a href="/" class="button">Volver a la página principal</a>
        </div>
    </section>
</body>
</html>
`;

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
            <a href="/" class="button">Volver a la página principal</a>
        </div>
    </section>
</body>
</html>
`;

// Creación del servidor
const server = http.createServer((req, res) => {
    const { url, method } = req;

    // Manejo de las solicitudes HTTP
    if (url === '/') {
        if (method === 'GET') {
            res.setHeader('Content-Type', 'text/html');
            res.end(indexPage);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            res.setHeader('Content-Type', 'text/html');
            res.end(aboutPage);
        }
    } else if (url === '/contact') {
        if (method === 'GET') {
            res.setHeader('Content-Type', 'text/html');
            res.end(contactPage);
        } else if (method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
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
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

// Inicio del servidor
server.listen(3001, () => {
    console.log('Servidor en ejecución en el puerto 3001');
});
