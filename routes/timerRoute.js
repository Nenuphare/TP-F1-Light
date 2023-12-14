import { Router } from 'express';
const router = Router();
import { getAllTimerUser } from '../controllers/timerController';

router
    .route('/:user_id/timer')
    .get(getAllTimerUser);

export default router;