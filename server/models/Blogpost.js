
const { Schema, model } = require('mongoose');


const blogpostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    author: String,
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date,
    comments: [
        {
            user: String,
            content: String,
            votes: Number,
        }
    ]
})

const Blogpost = model('Blogpost', blogpostSchema); // becomes 'blogposts' collection


module.exports = Blogpost;