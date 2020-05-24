const router = require('express').Router()

const Project = require('./../../models/projects')

router.get('/', (req, res) => {
    let project = new Project()
    project.title = 'rr'
    project.save().then((p) => {
        console.log(p)
    }).catch((err) => {
        console.log(err)
    })
    res.send('sdsd')
})

module.exports = router