const express = require("express");

const router = express.Router({ mergeParams: true });

// controllers
const questionsController = require("../controllers/questions.controller");

/**
 * @swagger
 * /questions:
 *  get:
 *    summary: Get all questions
 *    description:
 *      Will return all questions.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get("/", (req, res, next) => {
  questionsController
    .getQuestions()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /questions/{ID}:
 *  get:
 *    summary: Get question by ID
 *    description:
 *      Will return single question with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the question to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get("/:id", (req, res, next) => {
  questionsController
    .getQuestionById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /questions:
 *  post:
 *    summary: Create a question
 *    description:
 *      Will create a question.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: question
 *        description: The question to create.
 *        schema:
 *          type: object
 *          required:
 *            - question
 *            - latitude
 *            - longitude
 *            - points
 *            - created_at
 *            - deleted_at
 *            - updated_at
 *             - fk_game_id
 *          properties:
 *            question:
 *              type: string
 *            latitude:
 *              type: float
 *            longitude:
 *              type: float
 *            points:
 *              type: integer
 *            created_at:
 *              type: string
 *              format: date-time
 *            deleted_at:
 *              type: string
 *              format: date-time
 *            updated_at:
 *              type: string
 *              format: date-time
 *            fk_game_id:
 *              type: integer
 *    responses:
 *      201:
 *        description: Question created
 *      5XX:
 *        description: Unexpected error.
 */
router.post("/", (req, res) => {
  questionsController
    .createQuestion(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res.status(400).send("Bad request").end();
    });
});

/**
 * @swagger
 * /questions/{ID}:
 *  patch:
 *    summary: Create a question
 *    description:
 *      Will create a question.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the question to patch.
 *      - in: body
 *        name: question
 *        description: The question to create.
 *        schema:
 *          type: object
 *          properties:
 *            question:
 *              type: string
 *            latitude:
 *              type: float
 *            longitude:
 *              type: float
 *            points:
 *              type: integer
 *            created_at:
 *              type: string
 *              format: date-time
 *            deleted_at:
 *              type: string
 *              format: date-time
 *            updated_at:
 *              type: string
 *              format: date-time
 *            fk_game_id:
 *              type: integer
 *    responses:
 *      200:
 *        description: Question was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch("/:id", (req, res, next) => {
  questionsController
    .editQuestion(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /questions/{ID}:
 *  delete:
 *    summary: Delete a question
 *    description:
 *      Will delete a question with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the question to delete.
 *    responses:
 *      200:
 *        description: Question deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete("/:id", (req, res) => {
  questionsController
    .deleteQuestion(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the question id does not exist
      if (result === 0) {
        res.status(404).send("The question ID you provided does not exist.");
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
