import { Request, Response } from 'express';
import { UsuarioRepositorioSequelize } from '../repositorios/UsuarioRepositorioSequelize';
import { UsuarioServicio } from '../../aplicacion/usuarioServicio';

const usuarioRepositorio = new UsuarioRepositorioSequelize();
const usuarioServicio = new UsuarioServicio(usuarioRepositorio);

// Crear un usuario
export const crearUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await usuarioServicio.crearUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por su ID
export const obtenerUsuarioPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await usuarioServicio.obtenerUsuarioPorId(req.params.id);
    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).json(usuario);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los usuarios
export const obtenerTodosLosUsuarios = async (_req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await usuarioServicio.obtenerTodosLosUsuarios();
    res.status(200).json(usuarios);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario
export const actualizarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await usuarioServicio.actualizarUsuario(req.params.id, req.body);
    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).json(usuario);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await usuarioServicio.eliminarUsuario(req.params.id);
    if (!usuario) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.status(200).json(usuario);    }
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
