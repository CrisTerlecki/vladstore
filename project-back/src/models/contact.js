const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    'nombre': String,
    'email': String,
    'comentario': String
})

const contactModel = mongoose.model('Contact', schema, 'contact')

module.exports = contactModel