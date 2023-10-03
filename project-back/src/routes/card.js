const express = require('express')
const cardController = require('../controllers/card')

const cardRouter = express.Router()

cardController

cardRouter.get('/catalogo', cardController.obtenerCatalogo)
cardRouter.get('/catalogo/:id', cardController.obtenerCard)
cardRouter.post('/catalogo', cardController.crearCard)

module.exports = cardRouter