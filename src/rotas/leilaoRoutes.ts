import express from 'express';
import * as leilaoController from '../controllers/leilaoController';

const router = express.Router();

router.post('/leiloes', leilaoController.criarLeilao);

export default router;