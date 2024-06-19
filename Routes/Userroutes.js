const router = require('express').Router()
const userController = require('../componets/Reg')
const { userAuth } = require('../middleware/userAuth')
router.post('/addUser', userController.AddReg)
router.get('/getUser',  userController.displayReg)
router.post('/login', userController.loginUser)
router.put('/updateData/:userId',userController.updatedata)
module.exports = router 
