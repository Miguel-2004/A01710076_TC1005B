const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/') {
        if (method === 'GET') {
            renderPage('index', res);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            renderPage('about', res);
        }
    } else if (url === '/contact') {
        if (method === 'GET') {
            renderPage('contact', res);
        } else if (method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                res.setHeader('Content-Type', 'text/html');
                res.end('<h1>¡Gracias por tu mensaje!</h1>');
            });
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

function renderPage(pageName, res) {
    ejs.renderFile(`views/${pageName}.ejs`, {}, (err, html) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Error al renderizar la página');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
        }
    });
}

server.listen(3003, () => {
    console.log('Servidor en ejecución en el puerto 3003');
});
