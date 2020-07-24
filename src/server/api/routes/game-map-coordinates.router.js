const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const gameMapCoordinatesController = require('../controllers/game-map-coordinates.controller');

/**
 * @swagger
 * /map-coords/{game-factory.ID}:
 *  get:
 *    summary: Get maps coords
 *    description:
 *      Will return maps coords for specific game factory ID
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: game-factory.ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: ID of the game factory
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  gameMapCoordinatesController
    .gameMapCoordinates(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
