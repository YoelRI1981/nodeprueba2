
const Movie = require('./movie.models');
 
 
// get all
const getMovies = async (request, response) => {
    try {
        const movies = await Movie.find();
        response.status(200).json(movies);
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({message: error.message});
    }
}
 
// get 1
const getMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await Movie.findById(id);
        response.status(200).json(movie);
 
    } catch (error) {
        console.log(error.message);
        response.status(404).json({message: error.message});
    }
}
 
// post
const createMovie = async (request, response) => {
    const movie = new Movie(request.body);
    try {
        await movie.save();
        response.status(201).json({movie})
 
    } catch (error) {
        console.log(error.message);
        response.status(400).json({message: error.message});
    }
 
}
 
// patch
const updateMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const body = request.params.body;
        const movie = await Movie.findByIdAndUpdate(id, body,{new: true} );
        response.status(200).json(movie);
 
    } catch (error) {
        console.log(error.message);
        response.status(400).json({message: error.message});
    }
}
 
// delete
const deleteMovie = async (request, response) => {
    try {
        const id = request.params.id;
        const movie = await Movie.findByIdAndDelete(id);
        response.status(200).json({message: 'Se borró la película'});
    } catch (error) {
        console.log(error.message);
        response.status(404).json({message: error.message});
    }
}
 
 
module.exports = {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}