const { todo } = require('../models/Todo')
const addTodo = async (req, res) => {
    const { title, description } = req.body;
    console.log(req.files);
    if (!req.files) {
        return res.json({
            status: 400,
            message: "file is not found"
        })
    }
    const fileData = req.files.map((file) => ({
        path: file.path,
        size: file.size
    }))
    const data = new todo({
        title: title,
        description: description,
        files: fileData
    })
    await data.save();
    return res.json({
        status: 200,
        message: "add success",
        data
    })

}
const displayTodo = async(req,res)=>{
    const data = await todo.find()
    console.log('data',data);
    return res.json({
        status:200,
        message:'all data =',
        data:data
    })
}
module.exports = {addTodo ,displayTodo}
