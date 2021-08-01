const express = require('express')
const mongoose = require('./config/mongoose')
const router = require('./router')
const cors = require('cors')

const app = express()

mongoose(app)

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

app.use(router)

app.listen(5000, () => console.log(`Server is running on port 5000.`))