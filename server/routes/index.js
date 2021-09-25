module.exports = app => {
  app.use('/bike', require('./bikes.routes'))
  app.use('/auth', require('./auth.routes'))
  app.use('/shop', require('./shops.routes'))
}
