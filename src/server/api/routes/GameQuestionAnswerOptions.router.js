const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const possibleanswerController = require('../controllers/GameQuestionAnswerOptions.controller');

/**
 * @swagger
 * /answer_choices/{ID}:
 *  get:
 *    summary: Get answer choices for given question by ID
 *    description:
 *      Will return single answer_text with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the answer_choices to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  possibleanswerController
    .getPossibleanswerById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
