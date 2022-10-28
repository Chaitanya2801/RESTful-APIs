const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    movie_id:{
        type: Number,
        required: true
    },
    movie_name: {
        type: String, 
        required: true
    },
    movie_genre: {
        type: String,
        required: true
    },
    imdb_rating: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Movies', movieSchema, 'Movies');