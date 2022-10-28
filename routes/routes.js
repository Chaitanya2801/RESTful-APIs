const express = require('express');
const {getMovieDetails, getMovieByID, addMovie, deleteMovie, updateMovie} = require('../controllers/controller');
const router = express.Router();

router.get('/movies', getMovieDetails);
router.get('/movie/:id', getMovieByID);
router.post('/movie', addMovie);
router.delete('/movie/:id', deleteMovie);
router.put('/movie/:id', updateMovie);

module.exports=router;