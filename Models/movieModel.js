const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    movieTitle:{
        type: String,
        unique: true,
        required: true
    },
    movieGenre:{
        type: String,
        required: true
    },
    movieCast:{
        type: String,
        required: true
    },
    movieIMDBRating:{
        type: Number,
        required: true
    }


})


module.exports = mongoose.model("Movie", movieSchema );