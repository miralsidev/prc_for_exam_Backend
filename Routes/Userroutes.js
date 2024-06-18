const router = require('express').Router()
const userController = require('../componets/Reg')
router.post('/addUser',userController.AddReg)
router.get('/getUser',userController.displayReg)

module.exports=router 
