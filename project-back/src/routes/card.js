const express = require('express')
const cardController = require('../controllers/card')

const cardRouter = express.Router()

cardController

cardRouter.get('/catalogo', cardController.obtenerCatalogo)
cardRouter.post('/catalogo', cardController.crearCard)

module.exports = cardRouter