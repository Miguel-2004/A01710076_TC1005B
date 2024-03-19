const { validationResult } = require('express-validator');
const { setCookie } = require('../utils/cookies');

exports.getIndexPage = (req, res) => {
    res.render('index', { pageTitle: 'Inicio' });
};

exports.getAboutPage = (req, res) => {
    res.render('about', { pageTitle: 'Acerca de' });
};

exports.getContactPage = (req, res) => {
    res.render('contact', { pageTitle: 'Contacto', errors: req.flash('error') });
};

exports.submitContactForm = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash('error', errors.array().map(error => error.msg));
        res.redirect('/contact');
    } else {
        const { name, email, message } = req.body;
        setCookie(res, 'formSubmitted', 'true');
        res.redirect('/contact');
    }
};
