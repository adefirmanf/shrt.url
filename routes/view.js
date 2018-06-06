const express = require('express')
const Router = express.Router()
const Data = require('../models/url')

Router.get('/:id', (req, res, next)=>{
    Data.find(req.params.id).then((response)=>{
        res.json(response[0])
    })
})

module.exports = Router;