import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const criarUsuario = async (data: any) => {
  return await prisma.usuario.create({
    data,
  });
};

export const atualizarUsuario = async (id: number, data: any) => {
  return await prisma.usuario.update({
    where: { id },
    data,
  });
};

export const deletarUsuario = async (id: number) => {
  return await prisma.usuario.delete({
    where: { id },
  });
};