const express = require('express');

const router = express.Router({ mergeParams: true });

const qrController = require('../controllers/qr.controller');

/**
 * @swagger
 * /qr:
 *  post:
 *    summary: insert a game instance and recieve its qr code
 *    description:
 *      Will return the qr code for game instance.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res, next) => {
  qrController
    .get()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /qr/{USER}/{GAME}:
 *  post:
 *    summary: insert a game instance for a user and a game and recieve its qr code
 *    description:
 *      Will return the qr code for game instance.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: USER
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the USER to create a game instance for
 *     - in: path
 *       name: GAME
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the GAME to create a game instance for
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/:user/:game', (req, res, next) => {
  qrController
    .get(req.params.user, req.params.game)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
