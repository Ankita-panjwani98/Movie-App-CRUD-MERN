import axios from "axios";

export const getMoviesData = async (id) => {
  // console.log("Inside Get Movies axios");
  const res = await axios.get(`http://localhost:5000/movies/getMovies`);
  return res.data;
};

export const getMovieById = async (movieId) => {
  // console.log("Inside Get Movies BY Id axios");
  const res = await axios.get(`http://localhost:5000/movies/getMovieById/${movieId}`);
  return res.data;
};


export const postMoviesData = async (movieDetails) => {
  const res = await axios.post(
    "http://localhost:5000/movies/postMovie",
    movieDetails
  );
  return res.data;
};

export const updateMoviesData = async (movieDetails,movieId) => {
  const res = await axios.put(
    `http://localhost:5000/movies/updateMovie/${movieId}`,
    movieDetails
  );
  return res.data;
};

export const deleteMovie = async (movieId) => {
  // console.log("movie id in axios", movieId);
  const res = await axios.delete(
    `http://localhost:5000/movies/deleteMovie/${movieId}` ,
    
  );
  return res.data;
};
