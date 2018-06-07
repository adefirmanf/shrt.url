const express = require('express')
const Router = express.Router()
const Data = require('../models/url')

Router.get('/:id', (req, res, next)=>{
    Data.find(req.params.id).then((response)=>{
        console.log(response[0].url)
        res.redirect(response[0].url)
    })
})

module.exports = Router;