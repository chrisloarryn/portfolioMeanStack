const mongoose = require('mongoose')

const urlMongo = process.env.MONGODB_URI || 'mongodb+srv://chrisloarryn:AxfXLkN2gmf0exuM@cluster0-yznxk.mongodb.net/portfolio?retryWrites=true&w=majority'

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}

mongoose.connect(urlMongo, config, (err, connection) => {
    if (err) throw err
    console.log('connection ok')
})