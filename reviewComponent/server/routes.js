const router = require('express').Router();
const controllers = require('./controllers');

// GET Request to obtain all reviews
router.get('/reviews/api', controllers.rooms.get)

// GET Request to obtain filtered reviews
router.get('/reviews/reviews', controllers.reviews.get)

module.exports = router;