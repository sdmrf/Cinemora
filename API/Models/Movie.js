const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String},
    imgLogo: {type: String},
    imgThumbnail: {type: String},
    trailer: {type: String},
    year: {type: String},
    genre: {type: String},
    limit: {type: Number},
    isSeries: {type: Boolean, default: false},
    video: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema)