const mongoose = require('mongoose')
const Schema = mongoose.Schema

let projectSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A project must have a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'A project title must have less or equal then 40 characters'],
        minlength: [10, 'A project title must have more or equal then 10 characters']
        // validate: [validator.isAlpha, 'project title must only contain characters']
      }
})

module.exports = mongoose.model('Project', projectSchema)