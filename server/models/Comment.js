const { Schema, model } = require('mongoose');
const moment = require('moment');


const commentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    username: {
        type: String,
        required: true,
    },
    blogpostId: {
        type: Schema.Types.ObjectId,
        ref: 'Blogpost',
    },
    content: {
        type: String,
        required: true,
    },
    updatedAt: Date,
    votes: Number,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// format date
commentSchema.virtual('Date').get(function () {
    return moment(this.createdAt).format('MMMM, DD, YYYY');
});

const Comment = model('Comment', commentSchema); // becomes 'comments' collection


module.exports = Comment;