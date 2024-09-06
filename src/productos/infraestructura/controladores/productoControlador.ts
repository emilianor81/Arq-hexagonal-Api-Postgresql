import { Request, Response } from 'express';
import { ProductoRepositorioSequelize } from '../repositorios/ProductoRepositorioSequelize';
import { ProductoServicio } from '../../aplicacion/productoServicio';

const productoRepositorio = new ProductoRepositorioSequelize();
const productoServicio = new ProductoServicio(productoRepositorio);

export const crearProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto = await productoServicio.crearProducto(req.body);
    res.status(201).json(producto);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por su ID
export const obtenerProductoPorId = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto = await productoServicio.obtenerProductoPorId(req.params.id);
    if (!producto) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(producto);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los productos
export const obtenerTodosLosProductos = async (_req: Request, res: Response): Promise<void> => {
  try {
    const productos = await productoServicio.obtenerTodosLosProductos();
    res.status(200).json(productos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un producto
export const actualizarProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto = await productoServicio.actualizarProducto(req.params.id, req.body);
    if (!producto) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(producto);
    }
    res.status(200).json(producto);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un producto
export const eliminarProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto = await productoServicio.eliminarProducto(req.params.id);
    if (!producto) {
      res.status(404).json({ message: 'Producto no encontrado' });
    } else {
      res.status(200).json(producto);
    }
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Los demás controladores como obtener, actualizar, eliminar seguirán el mismo patrón
