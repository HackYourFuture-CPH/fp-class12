const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const questionsRouter = require('./questions.router');
const qrRouter = require('./qr.router');

router.use('/modules', modulesRouter);
router.use('/questions', questionsRouter);
router.use('/qr', qrRouter);

module.exports = router;
