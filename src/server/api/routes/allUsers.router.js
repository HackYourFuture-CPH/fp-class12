const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const allUsersController = require('../controllers/getAllUsers.controller');

/**
 * @swagger
 * /allUsers:
 *  get:
 *    summary: Select all users
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
    .getAllUsers(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
