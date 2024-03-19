// indexRoutes.js

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Ruta para la página de inicio
router.get('/', indexController.getIndex);

// Ruta para procesar el formulario de contacto
router.post('/contact', indexController.postContact);

module.exports = router;
