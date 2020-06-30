const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const mapCoordinatesController = require('../controllers/map-coordinates.controller');

/**
 * @swagger
 * /mapcoordinates:
 *  get:
 *    summary: Get all mapcoordinates
 *    description:
 *      Will return all mapcoordinates.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  mapCoordinatesController
    .getMapCoordinates()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
