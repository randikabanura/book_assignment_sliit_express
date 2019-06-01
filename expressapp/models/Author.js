const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    ID:{
        type:Number,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },

    Nationality: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('author', AuthorSchema);