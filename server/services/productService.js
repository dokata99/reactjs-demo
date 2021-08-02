const Laptop = require('../models/laptop')

async function getAll(){
    const laptops = await Laptop.find().lean()
    return laptops
}

module.exports = {
    getAll
}