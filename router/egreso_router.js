const express  = require('express');

const router = express.Router();
const ServiciosEgreso = require('../service/egreso_service');
const service = new ServiciosEgreso();

// Crear egreso retorna 400 si algo falló o 201 si se creó correctamente
router.post('/crear', async (req, res) => {
  try {
    const {id_usuario, id_categoria, id_estado, monto, fecha_pago} = req.body;
    if (!id_usuario || !id_categoria || !id_estado || !monto || !fecha_pago) {
      res.status(400).json({ error: 'Faltan datos' });
      return;
    }

    await service.crearEgreso(id_usuario, id_categoria, id_estado, monto, fecha_pago);
    res.status(200).json({ mensaje: 'Egreso creado'});
  } catch (error) {
    res.status(500).json({ error: 'Error raro' , error});
  }
});

// Consultar egreso por usuario
router.get('/consultar', async (req, res, next) => {
  try {
    const { id_usuario } = req.body;
    const egreso = await service.consultarEgresos(id_usuario);
    if (!egreso) {
      res.status(404).json({ error: 'No se encontraron egresos' });
      return;
    }
    res.status(200).json(egreso);
  } catch (error) {
    res.status(500).json({ error: 'Error raro', error });
  }
});

// Eliminar egreso
router.delete('/eliminar', async (req, res) => {
  try {
    const { id_egreso } = req.body;
    const egreso = await service.eliminarEgreso(id_egreso);
    if (!egreso) {
      res.status(404).json({ error: 'No se encontró el egreso' });
      return;
    }
    res.status(200).json({ mensaje: 'Egreso eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error raro', error });
  }
});

module.exports = router
