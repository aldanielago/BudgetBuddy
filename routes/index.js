const router_usuario = require('./usuario_router')
const router_categorias = require('./categorias_router')

function routerApi(app){
  // app.use('endpoint', enrutamiento)
  app.use('/api/usuario', router_usuario)
  app.use('/api/categorias', router_categorias)
}

module.exports = routerApi
