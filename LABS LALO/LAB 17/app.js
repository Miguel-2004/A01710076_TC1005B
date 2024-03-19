const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/indexRoutes');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Configuración del motor de vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para el manejo de sesiones
app.use(session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: true
}));

// Middleware para mensajes flash
app.use(flash());

// Middleware para parsear datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/', indexRoutes);

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
