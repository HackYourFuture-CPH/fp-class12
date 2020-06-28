const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const newGameInstanceController = require('../controllers/new-game-instance.controller');

/**
 * @swagger
 * /new-game:
 *   post:
 *    summary: Create a new game Instance
 *    description:
 *      Will create a new game Instance.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: A new game Instance
 *        description: The new game Instance to create.
 *        schema:
 *          type: object
 *          required:
 *            - game_code
 *            - fk_user_id
 *            - fk_game_factory_id
 *            - fk_game_scores_id

 *          properties:
 *            game_code:
 *              type: integer
 *            fk_user_id:
 *              type: integer
 *            fk_game_factory_id:
 *              type: integer
 *            fk_game_scores_id:
 *              type: integer

 *           
 *    responses:
 *      201:
 *        description: A new Game instance created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  newGameInstanceController
    .createNewGameInstance(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
