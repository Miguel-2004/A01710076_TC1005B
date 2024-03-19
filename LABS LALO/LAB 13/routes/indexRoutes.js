const express = require('express');
const router = express.Router();

// Importar el controlador
const indexController = require('../controllers/indexController');

// Rutas
router.get('/', indexController.getIndex);
router.get('/about', indexController.getAbout);
router.get('/contact', indexController.getContact);
router.post('/contact', indexController.postContact);

module.exports = router;
