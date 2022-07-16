const express = require('express');
const router = express();

const { createCMSOrganizer, createCMSUser, getCMSUsers } = require('./controller');
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth');

router.post('/organizer', authenticateUser, createCMSOrganizer);
router.post('/user', authenticateUser, createCMSUser);
// router.post('/organizer', getCMSUsers);

module.exports = router;
