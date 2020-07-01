const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const possibleAnswerController = require('../controllers/game-question-answer-options.controller');

/**
 * @swagger
 * /answer-choices/{id}:
 *  get:
 *    summary: Get answer choices for given question by id
 *    description:
 *      Will return single answer-text with a matching id.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The id of the answer-choices to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  possibleAnswerController
    .getPossibleAnswerById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
