const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const coordinatesController = require('../controllers/coordinates.controller');

/**
 * @swagger
 * /coordinates:
 *  get:
 *    summary: Get all coordinates
 *    description:
 *      Will return all coordinates.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  coordinatesController
    .getCoordinates()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
