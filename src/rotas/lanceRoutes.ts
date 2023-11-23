import express from 'express';
import * as lanceController from '../controllers/lanceController';

const router = express.Router();

router.post('/lances', lanceController.criarLance);

export default router;