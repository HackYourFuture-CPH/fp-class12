const express = require('express');

const router = express.Router({ mergeParams: true });

const createUserProfilesController = require('../controllers/create-user-profiles.controller');

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The user to create.
 *        schema:
 *          type: object
 *          required:
 *            - fk_avatar_id
 *            - uid
 *            - name
 *            - email
 *          properties:
 *            fk_avatar_id:
 *              type: integer
 *            uid:
 *              type: string
 *            name:
 *              type: string
 *            email:
 *              type: string
 *    responses:
 *      201:
 *        description: User created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  createUserProfilesController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch(next)
    .catch((error) => {
      console.log(error);
      res.status(400).send('Bad request').end();
    });
});

module.exports = router;
