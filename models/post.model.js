const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLenght: 200,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("argonaute", postSchema);
