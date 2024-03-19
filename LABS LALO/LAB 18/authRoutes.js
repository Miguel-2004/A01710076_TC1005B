// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Registro de usuario
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado con éxito.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario.' });
  }
});

// Inicio de sesión
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Inicio de sesión exitoso.' });
});

module.exports = router;
