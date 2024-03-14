const { Schema, model } = require('mongoose');


const commentSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    votes: Number,
});

const Comment = model('Comment', commentSchema); // becomes 'comments' collection


module.exports = Comment;