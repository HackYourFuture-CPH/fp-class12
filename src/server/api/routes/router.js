const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');
const createUserProfilesRouter = require('./create-user-profiles.routes');

router.use('/modules', modulesRouter);
router.use('/createUserProfiles', createUserProfilesRouter);

module.exports = router;
