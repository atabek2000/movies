const {Schema, model} = require('mongoose');

const MovieSchema = new Schema({
    name: {type: String, required: true},
    list: {type: Schema.Types.ObjectId, ref: 'MovieList'}
})

module.exports = model('Movie', MovieSchema)