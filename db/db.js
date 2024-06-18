const { default: mongoose } = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL
console.log('url', url);
const connectDb = mongoose.connect(url).then(() => {
    console.log('db connection');
}).catch(() => {
    console.log('db is not connect');
})
module.exports = { connectDb }
