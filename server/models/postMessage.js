const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  selectedFile: String,
});

module.exports = mongoose.model("PostMessage", postSchema);
