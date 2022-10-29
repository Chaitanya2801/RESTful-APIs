const pool = require('./db');

async function getMovieDetails (req, res) {
    try {
        const allMovies = await pool.query("SELECT * FROM movies");
        res.json(allMovies.rows);
    } catch (err) {
        console.error(err.message);
    }
};

async function addMovie(req, res) {
    try {
        const { movie_name } = req.body;
        const { movie_genre } = req.body;
        const { imdb_rating } = req.body;
        const newMovieDetails = await pool.query(
            "INSERT INTO movies (movie_name, movie_genre, imdb_rating) VALUES($1, $2, $3) RETURNING *",
            [movie_name, movie_genre, imdb_rating]);

        res.json(newMovieDetails.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

async function getMovieByID(req, res){
    try {
        const {id} = req.params;
        const movie = await pool.query("SELECT * FROM movies WHERE movie_id = $1", [id]);
        res.json(movie.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

async function deleteMovie(req, res) {
    try {
        const {id} = req.params;
        const deleteMovie = await pool.query("DELETE FROM movies WHERE movie_id = $1", [id])
        res.json("Deleted Successfully");
    } catch (err) {
        console.error(err.message);
    }
};

async function updateMovie(req, res) {
    try {
        const {id} = req.params;
        const { movie_genre } = req.body;
        
        const updateMovie = await pool.query(
            "UPDATE movies SET movie_genre = $1 WHERE movie_id = $2", [movie_genre, id]);
        res.json("Movie updated successfully");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = { getMovieDetails, addMovie, getMovieByID, deleteMovie, updateMovie };