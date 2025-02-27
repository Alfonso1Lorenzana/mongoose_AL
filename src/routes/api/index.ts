import { Router } from 'express';
const router = Router();
import videoRoutes from './thoughtController.js';
import userRoutes from './userRoutes.js';

router.use('/videos', videoRoutes);
router.use('/users', userRoutes);

export default router;
