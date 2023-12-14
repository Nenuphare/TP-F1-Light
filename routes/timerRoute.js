const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timerController');

router
    .route('/:id_user/timer')
    .get(timerController.getAllTimerUser)
    .post(timerController.createAUserTimer);

module.exports = router;