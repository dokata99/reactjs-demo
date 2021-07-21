const mongoose = require('mongoose')


const laptopSchema = new mongoose.Schema({
    model:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    displaySize:{
        type: Number,
        required: true
    },
    processorName:{
        type: String,
        required: true
    },
    ramSize:{
        type: Number,
        required: true
    },
    ramType:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    videoCard: {
        type: String,
        required: true
    },price: {
        type: Number,
        required: true
    }
    
    
})

module.exports = mongoose.model('Laptop', laptopSchema)