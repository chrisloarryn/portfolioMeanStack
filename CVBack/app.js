const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const bodyParser = require('body-parser')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const apiRouter = require('./routes/api')
require('dotenv').config({ path: './.env' })
require('./db')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '10kb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }))

app.use(compression())


// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    // console.log(req.cookies);
    next()
})

app.use('/api/v1', apiRouter)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})
  
app.use(globalErrorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})