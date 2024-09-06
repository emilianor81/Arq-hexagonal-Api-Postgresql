// Definir la interfaz para Producto en la capa de dominio
export interface IProducto {
    id?: number; // El id es opcional cuando creamos un nuevo producto
    descripcion: string;
    precio: number;
  }
  