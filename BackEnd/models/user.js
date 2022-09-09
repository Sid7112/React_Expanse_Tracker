
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    item: String,
    price:Number,
    date: Date

})

module.exports = mongoose.model("expanses",userSchema);