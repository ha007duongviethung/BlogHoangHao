const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SlugSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("slug", SlugSchema);
