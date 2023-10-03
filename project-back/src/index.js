const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cardRouter = require('./routes/card')

const app = express()

app.use(cors())
app.use(express.json())

app.use(cardRouter)

mongoose.connect('mongodb+srv://terlecki:0303456@vladstore.h2ehaam.mongodb.net/vladstore?retryWrites=true&w=majority&appName=AtlasApp')
    .then(() => 
        app.listen(5000, () => 
        console.log('Server ejecutandose en http://localhost:5000')
        )
    )
