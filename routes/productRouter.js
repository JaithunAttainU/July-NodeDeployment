const {Router} = require('express')
const multer = require('multer')
const { getProducts, postProduct } = require('../controllers/productsController')

const upload = multer({
  storage: multer.memoryStorage()
})

const productRouter = new Router()

productRouter.get('/', getProducts)
productRouter.post('/', upload.single('image'),  postProduct)

module.exports = {
  productRouter
}