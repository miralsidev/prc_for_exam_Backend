
const multer = require('multer')
const { validateMIMEType }  = require('validate-image-type')

const storage  = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads')
    }
    ,
    filename:function(req,file,cb){
        const  filename = `${Date.now()}-${file.originalname}`;
        cb(null,filename)
    }
})


const upload = multer({storage:storage})
module.exports = {upload}

