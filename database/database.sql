CREATE DATABASE moviedatabase;

CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(40),
    movie_genre VARCHAR(40),
    imdb_rating REAL
);
