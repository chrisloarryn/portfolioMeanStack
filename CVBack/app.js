const express = require('express')
const morgan = require('morgan')

const apiRouter = require('./routes/api')
require('dotenv').config({ path: './.env' })
require('./db')
const app = express()

app.use(morgan('dev'))

app.use('/api/v1', apiRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})