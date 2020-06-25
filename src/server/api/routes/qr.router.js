const express = require('express');

const router = express.Router({ mergeParams: true });

const qrController = require('../controllers/qr.controller');

/**
 * @swagger
 * /qr/{GAME}:
 *  get:
 *    summary: Get the qr code associated with game instance.
 *    description:
 *      Will return the qr code for game instance.
 *    produces: application/json
 *    parameters:
 *
 *
 *     - in: path
 *       name: GAME
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the GAME to select a game instance for
 *
 *    responses:
 *      200:
 *        description: Successful request
 *        schema:
 *          type: object
 *          properties:
 *            qr:
 *              type: string
 *              description: The Generated QR code.
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  qrController
    .get(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
