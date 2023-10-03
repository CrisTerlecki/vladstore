const cardModel = require("../models/card")

const cardController = {    
    async obtenerCatalogo(req, res) {        
        const docs = await cardModel.find({}).exec()
        res.json(docs)
    },

    async obtenerCard(req, res) { 
        const { id } = req.params;       
        const docs = await cardModel.findOne({id}).exec()
        res.json(docs)
    },
        
    async crearCard(req, res) {        
        const data = req.body;
        if (
            data.id == undefined ||
            data.titulo == undefined ||
            data.precio == undefined ||
            data.descripcion == undefined ||
            data.imagen == undefined
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