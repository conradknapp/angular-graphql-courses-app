const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  id: String,
  title: String,
  author: String,
  description: String,
  topic: String,
  url: String,
  voteCount: {
    type: Number,
    default: 0
  }
});

courseSchema.index({
  "$**": "text"
});

module.exports = mongoose.model("course", courseSchema);
