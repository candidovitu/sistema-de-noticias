const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    title: String,
    shortDescription: String,
    content: String,
    date: {type: Date, default: Date.now}
});

mongoose.model('post', post);
module.exports = post;