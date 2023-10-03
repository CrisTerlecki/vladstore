const contactModel = require("../models/contact");

const contactController = {    
    async obtenerContacto(req, res) {        
        const docs = await contactModel.find({}).exec()
        res.json(docs)
    },
        
    async crearContact(req, res) {        
        const data = req.body;
        if (
            data.nombre == undefined ||
            data.email == undefined ||
            data.comentario == undefined
        )
        {
            res.json({
                error: 'Propiedades faltantes'
            })
            return
        }
        const response = await contactModel.insertMany([data])
        res.json(response)
    }
}

module.exports = contactController 