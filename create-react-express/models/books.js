const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    authors:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    buylink:{
        type: String,
        required:true
    }
})

const book = mongoose.model("book", bookSchema);

module.exports = {
    book: book
};