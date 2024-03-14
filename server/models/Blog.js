
const { Schema, model } = require('mongoose');


const blog = new Schema({
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

const Blog = model('Blog', blog); // becomes 'blogs' collection


module.exports = Blog;
