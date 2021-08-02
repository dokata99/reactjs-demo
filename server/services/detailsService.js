const Laptop = require('../models/laptop')

async function getLaptopById(laptopId){
    const laptop = await Laptop.findOne({_id: laptopId}).lean()
    return laptop
}

module.exports = {
    getLaptopById
}