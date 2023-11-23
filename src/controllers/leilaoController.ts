import { Request, Response } from 'express';
import * as leilaoService from '../services/leilaoService';

export const criarLeilao = async (req: Request, res: Response) => {
  const leilao = await leilaoService.criarLeilao(req.body);
  res.json(leilao);
};