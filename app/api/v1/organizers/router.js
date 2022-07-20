const express = require('express');
const router = express();

const { createCMSOrganizer, createCMSUser, getCMSUsers } = require('./controller');
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth');

router.post('/organizers', authenticateUser, authorizeRoles('owner'), createCMSOrganizer);
router.post('/users', authenticateUser, authorizeRoles('owner'), createCMSUser);
router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers);

module.exports = router;
