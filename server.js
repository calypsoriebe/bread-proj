//env configuration
require('dotenv').config()
const PORT = process.env.PORT
//express variables
const express = require('express')
const app = express()

//routes
app.get('/', (req,res) => {
    res.send('welcome to my bread app :D')
})
//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
//listen
app.listen(PORT, () => {
    console.log('baking bread at port ', PORT)
})