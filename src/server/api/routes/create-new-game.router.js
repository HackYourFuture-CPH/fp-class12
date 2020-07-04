const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const createNewGameInstanceController = require('../controllers/create-new-game-instance.controller');

/**
 * @swagger
 * /new-game:
 *   post:
 *    summary: Create a new game instance
 *    description:
 *      Will create a new game instance.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: A new game instance
 *        description: Create a new game instance.
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
 *        description: A new Game instance was created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  createNewGameInstanceController
    .createNewGameInstance(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
