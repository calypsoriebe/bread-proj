const express = require('express')
const breads = express.Router()
//index of bread
const Bread = require('../models/bread.js')
breads.get('/', (req,res) => {
    res.send(Bread)
})
//show
breads.get('/:arrayIndex', (req,res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads