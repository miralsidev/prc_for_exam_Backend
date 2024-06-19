const  router = require('express').Router()
const todoController = require('../componets/Todo')
const {upload} = require('../helper/file')
const {userAuth} = require('../middleware/userAuth')
const {validate} = require('../helper/ValidateFile')
router.post('/addtodo',upload.array('files',10),validate,todoController.addTodo)
router.get('/alldata',userAuth,todoController.displayTodo)
// router.get('/alldata',todoController.displayTodo)

// router.put('/updateTodo',)
module.exports = router