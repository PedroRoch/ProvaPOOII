import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const criarLance = async (data: any) => {
  return await prisma.lance.create({
    data,
  });
};