const express = require('express');

const router = express.Router({ mergeParams: true });

// controller
const possibleAnswerController = require('../controllers/game-question-answer-options.controller');

/**
 * @swagger
 * /answer-choices/{ID}:
 *  get:
 *    summary: Get answer choices for given question by ID
 *    description:
 *      Will return single answer-text with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the answer-choices to get
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
