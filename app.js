const express = require('express')
const { initDB } = require('./dbConfig')
const dotenv = require('dotenv')
dotenv.config()

const { movieRouter } = require('./routes/movieRouter')
const { productRouter } = require('./routes/productRouter')

const app = express()

initDB()
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))

app.use('/movies', movieRouter)
app.use('/products', productRouter)


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log("Server Started Successfully")
})