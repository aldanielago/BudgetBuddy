const router_usuario = require('../router/usuario_router');
const router_ingreso = require('../router/ingreso_router');
const router_egreso = require('../router/egreso_router');
const router_presupuesto = require('../router/presupuesto_router');

function routerApi(app){
  // app.use('endpoint', enrutamiento)
  app.use('/api/usuario', router_usuario);
  app.use('/api/ingreso', router_ingreso);
  app.use('/api/egreso', router_egreso);
  app.use('/api/presupuesto', router_presupuesto)
}

module.exports = routerApi
