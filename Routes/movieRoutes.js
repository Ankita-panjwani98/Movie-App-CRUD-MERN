const express = require('express');
const router = express.Router();
const movieController = require('../Controllers/movieController');



router.post('/postMovie', movieController.postMovieDetails);
router.get('/getMovies', movieController.getAllMovies);
router.get('/getMovieById/:id', movieController.getMovieById);
router.put('/updateMovie/:id', movieController.updateMovie);
router.delete('/deleteMovie/:id', movieController.deleteMovie);

module.exports = router;