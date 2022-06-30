//env configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
//express variables
const express = require('express')
const app = express()

//routes
app.get('/', (req,res) => {
    res.send('welcome :D')
})
//listen
app.listen(PORT, () => {
    console.log('baking bread at port ', PORT)
})