const { Router } = require('express')
const router = Router()
const detailsService = require('../services/detailsService')



router.get('/:id', async (req,res) => {


    let laptop = await detailsService.getLaptopById(req.params.id)
    console.log(laptop)
    res.send(laptop)
})


module.exports = router