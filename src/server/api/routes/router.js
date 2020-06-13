const express = require('express');

const router = express.Router();

const allUsersRouter = require('./allUsers.router');

router.use('/allUsers', allUsersRouter);

module.exports = router;
