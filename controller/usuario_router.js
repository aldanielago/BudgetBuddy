const express  = require('express');
const boom = require('@hapi/boom');

const router = express.Router();
const ServiciosUsuario = require('../model/usuario_service')
const service = new ServiciosUsuario();

//Crear usuario retorna 400 si algo falló o 201 si se creó correctamente
router.post('/sign_up', async (req, res) => {
  try {
    const { nombre_usuario, contraseña, email } = req.body
    if (!nombre_usuario || !contraseña || !email) {
      throw boom.badRequest('Faltan datos')
    }

    const usuarioEncontrado = await service.buscarUsuario(nombre_usuario)
    if (usuarioEncontrado) {
      throw boom.badRequest('El usuario ya existe')
      return
    }

    const usuario = await service.crearUsuario(nombre_usuario, contraseña, email)
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
});

//Autenticar usuario retorna 400 si algo falló o 201 si se autenticó correctamente
router.post('/log_in', async (req, res) => {
  try {
    const { nombre, contraseña } = req.body
    if (!nombre || !contraseña) {
      res.status(400).json({ error: 'Faltan datos' })
      return
    }

    const usuario = await service.autenticarUsuario(nombre, contraseña)
    if (!usuario) {
      res.status(404).json({ error: 'Contraseña o usuario equivocado' })
      return
    }

    res.status(201).json(usuario)
  } catch (error) {
    next(error);
  }
});

module.exports = router
