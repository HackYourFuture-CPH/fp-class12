const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const newGameInstanceController = require('../controllers/newGameInstance.controller');

/**
 * @swagger
 * /newGame:
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
 *            - fk_user_id
 *            - game_timer

 *          properties:
 *            fk_user_id:
 *              type: integer
 *            game_timer:
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
