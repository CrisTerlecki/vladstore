const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    'id': {type: Number, unique: true},
    'titulo': String,
    'precio': Number,
    'descripcion': String,
    'imagen': String
})

const cardModel = mongoose.model('Card', schema, 'card')

module.exports = cardModel