
const { connectDb } = require('./db/db')
const express = require('express')
const userRouter = require('./Routes/Userroutes')
const todoRouter = require('./Routes/Todo')
const app = express()
require('dotenv').config()
const port = process.env.PORT;
var cors = require('cors')
const path = require('path')
app.use(express.urlencoded({extended:true}))
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
app.use(cors())
app.use(express.json());
app.use('/user', userRouter)
app.use('/todo', todoRouter)
connectDb.then(() => {
    app.listen(port, () => {
        console.log('server start=', port);
    })
}).catch((err) => {
    console.log('connection error-', err);
})