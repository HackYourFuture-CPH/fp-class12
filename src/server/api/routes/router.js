const express = require('express');

const router = express.Router();

const modulesRouter = require('./modules.router');

const createUserProfilesRouter = require('./create-user-profiles.routes');
const createUserRolesRouter = require('./create-user-roles.routes');

router.use('/modules', modulesRouter);
router.use('/createUserProfiles', createUserProfilesRouter);
router.use('/createUserRoles', createUserRolesRouter);

const questionsRouter = require('./questions.router');

router.use('/questions', questionsRouter);

module.exports = router;
