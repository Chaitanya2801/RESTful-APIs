const { v4: uuidv4 } = require('uuid');
const movieModel = require('../models/movieModel');
const pool = require('./db');

function getMovieDetails(req, res) {
    movieModel.find({}, (err, data)=> {
        if(!err) {
            res.status(200).send(data);
        }
    })
}

function getMovieByID(req, res) {
    movieModel.findOne({movie_id: req.params.id}, (err, data)=> {
        if(data!==null) {
            res.status(200).send(data);
        }
        else if(data == null){
            res.status(404).send({ status: 404, message: 'Movie not found' });
        }
        else{
            throw err;
        }
    })
}


function addMovie(req, res) {
    let movie = new movieModel({
        movie_id: uuidv4(),
        movie_name: req.body.movie_name,
        movie_genre: req.body.movie_genre,
        imdb_rating: req.body.imdb_rating
        
    })
    movie.save((err)=> {
        if(!err){
            res.status(201).send({ message: "movie added successfully" });
        }
        else{
            throw err;
        }
    })
    
}

function deleteMovie(req, res) {
    movieModel.deleteOne({movie_id: req.params.id}, (err, data)=>{
        if(err){
            throw err;
        } else{
            res.status(200).send({ message: 'movie deleted successfully' });
        }
    });
    
}

function updateMovie(req, res) {
    movieModel.updateOne({movie_id: req.params.id}, (err, data)=>{
        if(data!==null){
            movieModel[movieModel.indexOf(movie_id)] = req.body;
            res.status(200).send({ message: 'movie updated successfully' })
        }
        else if(data == null){
            res.status(404).send({ status: 404, message: 'movie with that id does not exist' });
        }
    })
}

module.exports = { getMovieDetails, getMovieByID, addMovie, deleteMovie, updateMovie };