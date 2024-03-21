
const { Schema, model } = require('mongoose');
const moment = require('moment');
const User = require('./User');


const blogpostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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

// format data
blogpostSchema.virtual('Date').get(function () {
    return moment(this.createdAt).format('MMMM, DD, YYYY');
});

blogpostSchema.virtual('username').get(async function () {
    try {
        // Log userId before and after conversion
        console.log('Original userId:', this.userId);
        const userId = typeof this.userId === 'string' ? mongoose.Types.ObjectId(this.userId) : this.userId;
        console.log('Converted userId:', userId);

        const user = await User.findOne({ _id: userId }, 'username');
        if (user) {
            return user.username;
        } else {
            return 'Unknown'; 
        }
    } catch (error) {
        console.error('Error fetching username:', error);
        throw new Error('Failed to fetch username');
    }
});


const Blogpost = model('Blogpost', blogpostSchema); // becomes 'blogposts' collection


module.exports = Blogpost;
