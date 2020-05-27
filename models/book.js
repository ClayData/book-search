const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true},
    user: { type: String, required: true},
    authors: [ String ],
    image: { type: String },
    view: { type: String },
    description: String,
    date: {type: Date, default: Date.now}
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book