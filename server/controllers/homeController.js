const { Router } = require('express')
const router = Router()
const homeService = require('./../services/homeService')



router.get('/products', async (req,res) => {
    let laptops = await homeService.getAll()
    console.log(laptops)

    res.send(laptops)
})


module.exports = router