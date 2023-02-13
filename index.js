// if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
// }
const express = require('express')
require("./config/db").connect()
var app = express()
app.use(express.json())
const router = express.Router()
const register = require("./router/register")
const verifyToken = require("./middleware/auth")
// const register = require('./router/register')
const login = require('./router/login')

const User = require('./model/user')

// Import Port Variable
const { API_PORT } = process.env

app.get('/', (req, res) => {
    res.send("Welcome to Home")
})
 
app.use('/', register)
app.use('/', login)
app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome 🙌 ")
})

app.listen(API_PORT, () => {
  console.log(`http://localhost:${API_PORT}`)
})
 