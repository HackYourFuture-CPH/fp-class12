const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const allUsersController = require('../controllers/allUsers.controller');

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
  allUsersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
