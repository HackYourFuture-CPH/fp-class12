const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const possibleanswerController = require('../controllers/possibleanswer.controller');

/**
 * @swagger
 * /answer_choices:
 *  get:
 *    summary: Get all answer_choices
 *    description:
 *      Will return all answer_choices.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  possibleanswerController
    .getPossibleanswer()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /answer_choices/{ID}:
 *  get:
 *    summary: Get answer_choices by ID
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
