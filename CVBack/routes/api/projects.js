const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const AppError = require('../../utils/appError')
const catchAsync = require('./../../utils/catchAsync')
const Project = require('./../../models/projects')

router.get(
  '/',
  catchAsync(async (req, res, next) => {
    const projects = await Project.find()
    res.json({ message: 'success', projects })
  })
)

router.post(
  '/',
  [
    check('title', 'Title must not be empty.')
      .not()
      .isEmpty()
      .isLength({ min: 10 }, 'Min or Max Length is wrong'),
    check(
      'description',
      'Description must not be empty and max 300 characters.'
    )
      .not()
      .isEmpty()
      .isLength({ min: 50, max: 300 }),
    check('url', 'URL must be a correct URL').isURL()
  ],
  catchAsync(async (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: 'failed', errors: errors.array() })
    }
    const findProject = await Project.findOne({ title: req.body.title })
    if (findProject) {
      // res.json({message: 'Project already'})
      // return next(new AppError('Project already exists.', 401))
      return res.status(401).json({
        message: 'Project already exists',
        project: findProject
      })
    }
    const newProject = await Project.create(req.body)
    res.json({
      message: 'success',
      newProject
    })
  })
)

router.patch(
  '/:projectId',
  catchAsync(async (req, res, next) => {
    const editedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      req.body,
      { new: true }
    )
    res.json({ message: 'success', project: editedProject })
  })
)

router.delete(
  '/:projectId',
  catchAsync(async (req, res, next) => {
    await Project.findOneAndDelete(req.params.projectId)
    res.status(204).json({ message: 'Project was deleted successfully' })
  })
)

module.exports = router
