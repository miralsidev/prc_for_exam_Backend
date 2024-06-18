const { Registration } = require('../models/Reg')
const bcrypt = require('bcrypt');
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
module.exports = { AddReg, displayReg }