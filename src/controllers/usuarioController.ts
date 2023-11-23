import { Request, Response } from 'express';
import * as usuarioService from '../services/usuarioService';

export const criarUsuario = async (req: Request, res: Response) => {
  const usuario = await usuarioService.criarUsuario(req.body);
  res.json(usuario);
};

export const atualizarUsuario = async (req: Request, res: Response) => {
  const usuario = await usuarioService.atualizarUsuario(Number(req.params.id), req.body);
  res.json(usuario);
};

export const deletarUsuario = async (req: Request, res: Response) => {
  await usuarioService.deletarUsuario(Number(req.params.id));
  res.json({ message: 'Usuário deletado' });
};