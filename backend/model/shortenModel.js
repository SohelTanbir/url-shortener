const mongoose = require('mongoose');

const shortenSchema = mongoose.Schema({
    url:{
        type: String,
        trim: true,
        required: true,
    },
    slug:{
        type: String,
        trim: true,
        required: true,
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

module.exports = mongoose.model("Shorten", shortenSchema);