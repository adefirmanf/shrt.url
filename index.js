const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
// Routes init
const index = require('./routes/index')
const view = require('./routes/view')

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(express.static('public'))

Mongoose.connect('mongodb+srv://john-doe_10:admin12345@maincluster-wf4uk.mongodb.net/test?retryWrites=true', (err)=>{
    if(!err){
        console.log("Mongo Atlas Ready!")
    }else{
    console.log(err)
    }
})

// Index routes
app.use('/', index)
app.use('/v', view)

// Listen server
app.listen(process.env.PORT, ()=>{
    console.log(`PORT is listening on ${process.env.PORT}`)
})


module.exports = app;