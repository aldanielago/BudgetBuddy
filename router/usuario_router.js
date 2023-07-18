const express  = require('express');

const router = express.Router();
const ServiciosUsuario = require('../service/usuario_service');
const service = new ServiciosUsuario();

//Crear usuario retorna 400 si algo falló, 500 si es otro error raro y 200 si se creó correctamente
router.post('/sign_up', async (req, res) => {
  try {
    console.log(req.body)
    const { nombre_usuario, contraseña, email } = req.body
    if (!nombre_usuario || !contraseña || !email) {
      res.status(400).json({ error: 'Faltan datos' })
      return
    }

    const usuarioEncontrado = await service.buscarUsuario(nombre_usuario)
    if (usuarioEncontrado) {
      res.status(400).json({ error: 'El usuario ya existe' })
      return
    }

    const usuario = await service.crearUsuario(nombre_usuario, email, contraseña)
    res.status(200).json(usuario)

  } catch (error) {
    res.status(500).json({ error: 'Error raro' })
  }
});

//Autenticar usuario retorna 400 si algo falló o 201 si se autenticó correctamente
router.post('/log_in', async (req, res) => {
  try {
    const { nombre_usuario, contraseña } = req.body
    if (!nombre_usuario || !contraseña) {
      res.status(400).json({ error: 'Faltan datos' })
      return
    }

    const usuario = await service.autenticarUsuario(nombre_usuario, contraseña)
    if (!usuario) {
      res.status(404).json({ error: 'Contraseña o usuario equivocado' })
      return
    }

    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ error: 'Error raro' })
    console.log(error);
  }
});

module.exports = router
