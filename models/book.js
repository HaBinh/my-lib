var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  isbn: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },
  description: {
    type: String
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true }
});

module.exports = mongoose.model("Book", BookSchema);