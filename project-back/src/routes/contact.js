const express = require('express')
const contactController = require('../controllers/contact')

const contactRouter = express.Router()

contactController

contactRouter.get('/contacto', contactController.obtenerContacto)
contactRouter.post('/contacto', contactController.crearContact)

module.exports = contactRouter