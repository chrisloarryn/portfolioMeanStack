const router = require('express').Router()
const apiRouterProjects = require('./api/projects')

router.use('/projects', apiRouterProjects)

module.exports = router