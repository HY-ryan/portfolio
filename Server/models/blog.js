const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    created: {type: Date, default: Date.now },
    content: String
});

module.exports = mongoose.model('Post', postSchema);