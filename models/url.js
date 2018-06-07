const sh = require('shorthash')
const Mongoose = require('mongoose')
const scheme = new Mongoose.Schema({
    id : 'string',
    url : 'string',
})
class URL {
    constructor() {
        const Model = Mongoose.model('url', scheme);
        this.data = Model;
    }
    async create(url) {
        let RandomizeString = Math.floor(Math.random() * url.length + 1) 
        let shorten = sh.unique(url[RandomizeString] + url + Math.floor(Math.random() * new Date().getMilliseconds()) + 1)
        const { data } = this;
        const Create = new data({
            id : shorten,
            url
        });
        let Result = await Create.save().then(data => data).catch(err => err)
        return Result
    }
    async find(id) {
        const { data } = this;
        let Result = await data.find({id}, (err, data) => {
            if(err)console.log(err);
            return data;
        });
        return Result
    }
}

const Data = new URL()
module.exports = Data