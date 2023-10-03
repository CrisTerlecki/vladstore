const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    'titulo': String,
    'precio': String,
    'descripcion': String,
    'id': String
})

const cardModel = mongoose.model('Card', schema, 'card')

module.exports = cardModel