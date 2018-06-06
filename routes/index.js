const express = require('express')
const Router = express.Router()
const Data = require('../models/url')

Router.get('/', (req, res, next)=>{
    Data.find().then((response)=>{
        res.json(response)
    })
})

Router.post('/url', (req, res, next)=>{
    Data.create(req.body.url).then((response)=>{
        res.json(response)
    })
})

module.exports = Router;