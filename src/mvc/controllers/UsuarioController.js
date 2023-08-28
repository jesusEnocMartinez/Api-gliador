const express = require('express');
const UsuarioService = require('../../../src/mvc/services/UsuarioService');

const router = express.Router();

// Ruta para agregar un nuevo usuario

router.post('/Insertar/usuarios', async (req, res) => {
    try {
      const datosUsuario = req.body; // Suponiendo que los datos del usuario están en el cuerpo de la solicitud
      const nuevoUsuario = await UsuarioService.agregarUsuario(datosUsuario);
      res.status(201).json({ mensaje: 'Usuario agregado correctamente', usuario: nuevoUsuario });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al agregar el usuario', error: error.message });
    }
  });
  
  module.exports = router;
