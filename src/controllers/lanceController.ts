import { Request, Response } from 'express';
import * as lanceService from '../services/lanceService';

export const criarLance = async (req: Request, res: Response) => {
  const lance = await lanceService.criarLance(req.body);
  res.json(lance);
};