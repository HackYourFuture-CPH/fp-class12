const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const qrRouter = require('./qr.router');

router.use('/modules', modulesRouter);
router.use('/qr', qrRouter);

module.exports = router;
