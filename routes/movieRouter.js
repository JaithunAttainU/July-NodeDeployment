const {Router} = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/moviesController')
const { addReview, getAllReviews } = require('../controllers/reviewController')

const movieRouter = new Router()

movieRouter.get('/', getMovies)
movieRouter.get('/:movieID', getMoviesByID)
movieRouter.post('/', postMovie)
movieRouter.put('/:movieID', updateMovieById)
movieRouter.delete('/:movieID', deleteMovieByID)


movieRouter.post('/:movieID/reviews', addReview)
movieRouter.get('/:movieID/reviews', getAllReviews)
// movieRouter.delete('/:movieID/reviews/:reviewID', deleteReview)

module.exports = {
  movieRouter
}