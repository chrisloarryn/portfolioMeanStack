const jwt = require('jwt-simple')
const { promisify } = require('util')
const moment = require('moment')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')

exports.checkToken = async (req, res, next) => {
  if (!req.headers['access-token']) {
    return res
      .status(403)
      .json({
        status: 'error',
        message: 'Debes incluir la cabecera access-token'
      })
  }

  const token = req.headers['access-token']

  // let payload = await jwt.decode(token, process.env.JWT_SECRET)
  let payload = null;
  try {
    // payload = await jwt.decode(token, process.env.JWT_SECRET)
    // await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    payload = await jwt.decode(token, process.env.JWT_SECRET)

  } catch (error) {
    res.status(503).json({status: 'error', message: 'Ha ocurrido un error!'})
  }
  if (payload.expiredAt > moment.unix()) {
    return res
      .status(403)
      .json({ status: 'error', message: 'El token incluido ha expirado' })
  }

  req.payload = payload
}
