const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const mapCoordinatesController = require('../controllers/map-coordinates.controller');

/**
 * @swagger
 * /map-coordinates:
 *  get:
 *    summary: Get all map coordinates
 *    description:
 *      Will return all map coordinates.
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
