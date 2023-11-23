// services/leilaoService.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const criarLeilao = async (data: any) => {
  return await prisma.leilao.create({
    data,
  });
};