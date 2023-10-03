const cardModel = require("../models/card")

const cardController = {    
    async obtenerCatalogo(req, res) {
        
        const docs = await cardModel.find({}).exec()
        res.json(docs)
    },
        
    async crearCard(req, res) {   
        
        const data = req.body;
        if (
            data.titulo == undefined ||
            data.precio == undefined ||
            data.descripcion == undefined 
        )
        {
            res.json({
                error: 'Propiedades faltantes'
            })
            return
        }
        const response = await cardModel.insertMany([data])
        res.json(response)
    }
}

module.exports = cardController 