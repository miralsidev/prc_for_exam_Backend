const  router = require('express').Router()
const todoController = require('../componets/Todo')
const {upload} = require('../helper/file')
const {userAuth} = require('../middleware/userAuth')
router.post('/addtodo',upload.array('files',10),todoController.addTodo)
router.get('/alldata',userAuth,todoController.displayTodo)
module.exports = router