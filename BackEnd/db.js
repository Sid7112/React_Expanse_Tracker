

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sidexpanse");

module.exports = mongoose;