// indexRoutes.js

const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/indexController');

// Rutas para las páginas de inicio, acerca de y contacto
router.get('/', IndexController.getIndexPage);
router.get('/about', IndexController.getAboutPage);
router.get('/contact', IndexController.getContactPage);
router.post('/contact', IndexController.submitContactForm);

module.exports = router;