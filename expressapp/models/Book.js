const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
   Name: {
       type: String,
       required: true
   },
    ISBN: {
        type: Number,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    YearOfPublication: {
        type: Number,
        required: true
    },
    Publisher: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('books', BookSchema);