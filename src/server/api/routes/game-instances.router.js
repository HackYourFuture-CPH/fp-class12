const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const gameInstancesController = require('../controllers/game-instances.controller');

/**
 * @swagger
 * /game-instances:
 *  get:
 *    summary: Get all the game instances.
 *    description:
 *      Will return all game instances.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  gameInstancesController
    .getGameInstances()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
