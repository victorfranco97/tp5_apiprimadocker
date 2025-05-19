import { Request, Response } from 'express';
import * as usuarioService from '../services/usuarioService';

export const getAllUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getUsuarioById = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.getUsuarioById(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario' });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  try {
    await usuarioService.deleteUsuario(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar usuario' });
  }
};