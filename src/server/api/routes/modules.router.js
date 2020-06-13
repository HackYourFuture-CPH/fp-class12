const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const modulesController = require('../controllers/modules.controller');

/**
 * @swagger
 * /modules:
 *  get:
 *    summary: Select all usres
 *    description:
 *      Retrieves all the users that played a games (game_instance).
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  modulesController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
