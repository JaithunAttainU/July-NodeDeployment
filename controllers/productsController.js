const { Base64 } = require('js-base64')
const cloudinary = require('cloudinary').v2;

const products = []

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const getProducts = (request, response) => {
  try {
    response.send({ status: 'success', products })
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'error fetching movies' })
  }
}

const postProduct = async (request, response) => {
  try {
    const productData = request.body
    const fileData = request.file

    console.log(fileData)
    if (fileData) {
      const base64String = Base64.encode(fileData.buffer)
      const cloudRes = await cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64String}`)
      productData.imageUrl = cloudRes.secure_url
    }

    products.push(productData)
    response.send({ status: 'success', msg: 'Product Added Successfully', product: productData })

  } catch (error) {
    response.send({ status: 'error', msg: 'Error adding Product' })
  }
}

module.exports = {
  getProducts,
  postProduct
}