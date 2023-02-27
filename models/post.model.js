const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slugId: {
    type: mongoose.ObjectId,
    required: true,
  },
  summary: {
    type: String,
  },
  thumb: {
    type: String,
  },
  content: {
    type: String,
  },
  // typeId: {
  //   type: mongoose.ObjectId,
  //   required: true,
  // },
  status: {
    type: Number,
    default: 1,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", PostSchema);
