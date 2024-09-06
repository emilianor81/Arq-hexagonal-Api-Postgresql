import { IProducto } from '../entidades/producto';

export interface IProductoRepositorio {
  crear(productoData: IProducto): Promise<IProducto>;
  obtenerPorId(id: string): Promise<IProducto | null>;
  obtenerTodos(): Promise<IProducto[]>;
  actualizar(id: string, productoData: Partial<IProducto>): Promise<IProducto | null>;
  eliminar(id: string): Promise<IProducto | null>;
}
