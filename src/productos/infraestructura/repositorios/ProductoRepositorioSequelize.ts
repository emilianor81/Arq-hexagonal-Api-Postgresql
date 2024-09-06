import { IProductoRepositorio } from '../../dominio/repositorios/IProductoRepositorio';
import { Producto } from '../modelos/productoModelo'; // Modelo Sequelize
import { IProducto } from '../../dominio/entidades/producto';

// Implementación del repositorio utilizando Sequelize
export class ProductoRepositorioSequelize implements IProductoRepositorio {
  async crear(productoData: IProducto): Promise<Producto> {
    return await Producto.create(productoData);
  }

  async obtenerPorId(id: string): Promise<Producto | null> {
    return await Producto.findByPk(id);
  }

  async obtenerTodos(): Promise<Producto[]> {
    return await Producto.findAll();
  }

  async actualizar(id: string, productoData: Partial<IProducto>): Promise<Producto | null> {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;
    await producto.update(productoData);
    return producto;
  }

  async eliminar(id: string): Promise<Producto | null> {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;
    await producto.destroy();
    return producto;
  }
}
