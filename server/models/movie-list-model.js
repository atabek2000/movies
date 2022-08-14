const {Schema, model} = require('mongoose');


const MovieListSchema = new Schema({
    name: {type: String, unique: true, required: true}
})

module.exports = model('MovieList', MovieListSchema)