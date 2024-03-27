
const { Schema, model } = require('mongoose');
const moment = require('moment');
const Comment = require('./Comment');
const User = require('./User');


const blogpostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    // username: {
    //     type: String,
    //     required: true,
    // },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    src: String,
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date,
    rating: Number,
    comments: [{
     type: Schema.Types.ObjectId,
     ref: 'Comment',
    }]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// format date
blogpostSchema.virtual('Date').get(function () {
    return moment(this.createdAt).format('MMMM, DD, YYYY');
});


const Blogpost = model('Blogpost', blogpostSchema); // becomes 'blogposts' collection


module.exports = Blogpost;
