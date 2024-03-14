
const { Schema, model } = require('mongoose');


const blogpostSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [
        {
            user: String,
            content: String,
            votes: Number,
        }
    ]
})

const Blogpost = model('Blogpost', blogpostSchema); // becomes 'blogs' collection


module.exports = Blogpost;
