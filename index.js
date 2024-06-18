
const { connectDb } = require('./db/db')
const express = require('express')
const userRouter = require('./Routes/Userroutes')
const app = express()
var bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT;
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.json());
app.use('/user', userRouter)

connectDb.then(() => {
    app.listen(port, () => {
        console.log('server start=', port);
    })
}).catch((err) => {
    console.log('connection error-', err);
})