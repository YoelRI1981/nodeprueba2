const express = require("express")

const movieRouter = express.Router;
const { getMovies, getMovies, createMovie, updateMovie, deleteMovie} = require("./movie.controllers");

movieRouter.get("/", getMovies );
movieRouter.get("/:id", getMovies );
movieRouter.post("/", createMovie);
movieRouter.patch("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

module.exports = movieRouter;

