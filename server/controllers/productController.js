const { Router } = require('express')
const router = Router()
const productService = require('../services/productService')



router.get('/', async (req,res) => {
    let laptops = await productService.getAll()
    res.send(laptops)
})


module.exports = router