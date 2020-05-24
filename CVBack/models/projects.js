const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slugify = require('slugify')


let projectSchema = new Schema({
    title: {
      type: String,
      required: [true, 'A project must have a title'],
      unique: true,
      trim: true,
      maxlength: [40, 'A project title must have less or equal then 40 characters'],
      minlength: [10, 'A project title must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'project title must only contain characters']
    },
    description: {
      type: String,
      trim: true
    },
    slug: String,
    url: String,
    client: String,
    urlClient: String,
    images: [String]

})

// indexes
projectSchema.index({ slug: 1 })

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
projectSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true })
  next()
})

module.exports = mongoose.model('Project', projectSchema)