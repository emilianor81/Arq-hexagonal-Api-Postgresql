import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../infraestructura/db';
import { IUsuario } from '../../dominio/entidades/usuario';

// Definir el modelo Sequelize que implementa la interfaz IUsuario
export class Usuario extends Model<IUsuario> implements IUsuario {
  public id!: number;
  public email!: string;
  public password!: string;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Conexión a la base de datos en la infraestructura
    tableName: 'usuarios',
  }
);
