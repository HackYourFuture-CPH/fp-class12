const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const mapcoordinatesController = require('../controllers/mapcoordinates.controller');

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
  mapcoordinatesController
    .getMapCoordinates()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
