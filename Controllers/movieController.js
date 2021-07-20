const express = require("express");
const { request, response } = require("express");
const mongoose = require("mongoose");
const movieSchema = require("../Models/movieModel");

exports.postMovieDetails = async (request, response, next) => {
  console.log("In postMovie Controller");

  const movies = await new movieSchema({
    movieTitle: request.body.movieTitle,
    movieGenre: request.body.movieGenre,
    movieCast: request.body.movieCast,
    movieIMDBRating: request.body.movieIMDBRating,
  });

  movies.save((err, res) => {
    if (err) {
      console.log("Error", err);
      response
        .status(400)
        .json({ message: "Movie is already exists with this Title!!" });
    } else {
      console.log(res);
      // response.status(201).json({ message: "User Created Successfully" });
      response.status(201).json(movies);
    }
  });
};

exports.getAllMovies = async (request, response, next) => {
  console.log("Inside get all movies controller");

  try {
    const movies = await movieSchema.find({});

    console.log("MOVIES", movies);
    if (movies) {
      response.status(200).json(movies);
    } else {
      response
        .status(400)
        .json({ message: "Movie is not found with provided data" });
    }
  } catch (error) {
    console.log("Error:", error);
    response.status(400).json({ message: "Can't fetch Movies" });
  }
};


exports.getMovieById = async (request, response, next) => {
    console.log("Inside get all movies controller");
    const movieId = request.params.id;
    try {
      const movies = await movieSchema.findById(movieId);
  
      console.log("MOVIES", movies);
      if (movies) {
        response.status(200).json(movies);
      } else {
        response
          .status(400)
          .json({ message: "Movie is not found with provided data" });
      }
    } catch (error) {
      console.log("Error:", error);
      response.status(400).json({ message: "Can't fetch Movies" });
    }

  };
  

exports.updateMovie = async (request, response, next) => {
  console.log("In movies update controller");
  const movieId = request.params.id;
  console.log("Movie id: ", movieId);
  const movieTitle = request.body.movieTitle;
  const movieGenre = request.body.movieGenre;
  const movieCast = request.body.movieCast;
  const movieIMDBRating = request.body.movieIMDBRating;

  //   console.log("checkin :", checkIn, "formatted:", checkInDate);

  await movieSchema
    .findByIdAndUpdate(
      { _id: movieId },

      {
        $set: {
          movieTitle: movieTitle,
          movieGenre: movieGenre,
          movieCast: movieCast,
          movieIMDBRating: movieIMDBRating,
        },
      }
    )
    .then(() => {
      movieSchema.findOne({ _id: movieId }).then((movie) => {
        response.send(movie);
        console.log("Updated movie", movie);
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteMovie = async (request, response, next) => {
    console.log("Inside delete Movie");
    const movieId = request.params.id;
    console.log("movie id", movieId);    
    
    await movieSchema.deleteOne({_id: movieId},(result, error) => {
        if (error) {
          console.log("Error Delete:", error);
          response.send("Deleted")
        } else {
          console.log("Result:", result);
          response.send(result);
        }
      });
     
};
