import express from 'express';
import * as usuarioController from '../controllers/usuarioController';

const router = express.Router();

router.post('/usuarios', usuarioController.criarUsuario);
router.put('/usuarios/:id', usuarioController.atualizarUsuario);
router.delete('/usuarios/:id', usuarioController.deletarUsuario);

export default router;