const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title : String,
    descripton : String,
    // age : Number,
    // number : Date,
})
const notemodel = mongoose.model("note" , noteSchema)
module.exports = notemodel