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

/**
 * @swagger
 * /coordinates/{ID}:
 *  get:
 *    summary: Get coordinate by ID
 *    description:
 *      Will return single coordinate with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
    coordinatesController
        .getCoordinatesById(req.params.id)
        .then((result) => res.json(result))
        .catch(next);
});

module.exports = router;
