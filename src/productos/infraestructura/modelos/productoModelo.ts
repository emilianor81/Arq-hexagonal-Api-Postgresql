import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../infraestructura/db';
import { IProducto } from '../../dominio/entidades/producto';

// Definir el modelo Sequelize que implementa la interfaz IProducto
export class Producto extends Model<IProducto> implements IProducto {
  public id!: number;
  public descripcion!: string;
  public precio!: number;
}

Producto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize, // Conexión a la base de datos de la capa de infraestructura
    tableName: 'productos',
  }
);
