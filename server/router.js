const { Router } = require('express')
const router = Router()
const productController = require('./controllers/productController')
const detailsController = require('./controllers/detailsController')


router.use('/products', productController)
router.use('/details', detailsController)




module.exports = router