import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const getAllUsuarios = async () => {
  return prisma.usuario.findMany();
};

export const getUsuarioById = async (id: string) => {
  return prisma.usuario.findUnique({ where: { id } });
};

export const createUsuario = async (data: { nombre: string; email: string; password: string }) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.usuario.create({
    data: {
      nombre: data.nombre,
      email: data.email,
      password: hashedPassword,
    },
  });
};

export const updateUsuario = async (id: string, data: { nombre?: string; email?: string; password?: string }) => {
  const updateData: any = {};
  if (data.nombre) updateData.nombre = data.nombre;
  if (data.email) updateData.email = data.email;
  if (data.password) updateData.password = await bcrypt.hash(data.password, 10);

  return prisma.usuario.update({
    where: { id },
    data: updateData,
  });
};

export const deleteUsuario = async (id: string) => {
  return prisma.usuario.delete({ where: { id } });
};