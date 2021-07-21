const { Router } = require('express')
const router = Router()
const homeController = require('./controllers/homeController')


router.use('/', homeController)




module.exports = router