const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const gameInstanceController = require('../controllers/game_Instance.controller');

/**
 * @swagger
 * /games:
 *  post:
 *    summary: Create a game Instance
 *    description:
 *      Will create a game Instance.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: game Instance
 *        description: The game Instance to create.
 *        schema:
 *          type: object
 *          required:
 *            - id
 *            - max_players
 *            - created_at
 *            - updated_at
 *
 *          properties:
 *            id:
 *              type: integer
 *            max_players:
 *              type: integer
 *            created_at:
 *              type: string
 *              format: date-time
 *            updated_at:
 *              type: string
 *              format: date-time
 * 
 *
 *    responses:
 *      201:
 *        description: Game instance created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  gameInstanceController
    .createGameInstance(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
