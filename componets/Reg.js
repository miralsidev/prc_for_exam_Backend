const { Registration } = require('../models/Reg')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()
var jwt = require('jsonwebtoken');
const { mongoose } = require('mongoose');
const AddReg = async (req, res) => {
    const { name, email, password, Phone } = req.body;
    if (name && email && password && Phone) {
        const hash = bcrypt.hashSync(password, 10);
        console.log('hash = ', hash);
        const data = await Registration({
            name: name,
            email: email,
            password: hash,
            Phone: Phone
        })
        await data.save()
        return res.json({ status: 200, message: "add data succes.!!", data });
    }
    else {
        return res.json({ status: 400, message: "all filed  required" });
    }
}
const displayReg = async (req, res) => {
    const data = await Registration.find()
    return res.json({ status: 200, message: 'display all data ', data })
}
const loginUser = async (req, res) => {
try {
    const { email, password } = req.body;
    const user = await Registration.findOne({ email: email })
    console.log('user = ', user);
    if (user) {
        const isMatch = bcrypt.compareSync(password, user.password);
        const secret = process.env.secret_key
        if (email == user.email && isMatch) {
            const token = jwt.sign({ userId: user._id, userEmail: user.email }, secret, { expiresIn: '5d' })
            return res.json({ status: 200, message: 'login succes', token })
        }
        else{
        return res.json({ status: 400, message:'somthin went to wrong' })

        }
    }
    else{
        return res.json({ status: 400, message:'not found user' })

    }
} catch (error) {
    console.log(error);
}

}
const updatedata = async (req, res) => {
    const { email, name, password, Phone } = req.body
    const userId = req.params.userId;

    const user = await Registration.findOne({ _id: new mongoose.Types.ObjectId(userId) })
    console.log('user', user);
    if (user) {
        const data = await Registration.findOneAndUpdate(
            { _id: user._id },
            {
                $set: {
                    email: email,
                    name: name
                }
            }
        )
        return res.json({ status: 200, message: 'update successfully' })
    }
}
module.exports = { AddReg, displayReg, loginUser, updatedata }