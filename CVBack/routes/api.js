const router = require('express').Router()
const moment = require('moment')
const jwt = require('jwt-simple')

const middlewares = require('./middlewares')
const apiRouterProjects = require('./api/projects')

router.use('/projects', middlewares.checkToken, apiRouterProjects)

router.get('/token', (req, res) => {
  let payload = {
    usuario: 'Juanan',
    createdAt: moment().unix(),
    expiredAt: moment()
      .add(5, 'minutes')
      .unix()
  }
  const token = jwt.encode(payload, process.env.JWT_SECRET)
  console.log(token)
  res.status(200).json({
    message: 'success',
    token
  })
})

module.exports = router
