const express = require('express');
const {getMovieDetails, addMovie, deleteMovie, updateMovie, getMovieByID} = require('../controllers/controller');
const router = express.Router();
const pool = require('../db');

router.get('/movies', getMovieDetails);
router.post('/movie', addMovie);
router.get('/movie/:id', getMovieByID);
router.delete('/movie/:id', deleteMovie);
router.put('/movie/:id', updateMovie);

module.exports=router;