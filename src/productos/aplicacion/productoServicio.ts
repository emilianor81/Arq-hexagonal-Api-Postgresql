import { IProductoRepositorio } from '../dominio/repositorios/IProductoRepositorio';
import { IProducto } from '../dominio/entidades/producto';

export class ProductoServicio {
  private repositorio: IProductoRepositorio;

  constructor(repositorio: IProductoRepositorio) {
    this.repositorio = repositorio;
  }

  async crearProducto(productoData: IProducto): Promise<IProducto> {
    return await this.repositorio.crear(productoData);
  }

  async obtenerProductoPorId(id: string): Promise<IProducto | null> {
    return await this.repositorio.obtenerPorId(id);
  }

  async obtenerTodosLosProductos(): Promise<IProducto[]> {
    return await this.repositorio.obtenerTodos();
  }

  async actualizarProducto(id: string, productoData: Partial<IProducto>): Promise<IProducto | null> {
    return await this.repositorio.actualizar(id, productoData);
  }

  async eliminarProducto(id: string): Promise<IProducto | null> {
    return await this.repositorio.eliminar(id);
  }
}
