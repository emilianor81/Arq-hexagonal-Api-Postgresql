import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
console.log('PROCESS.ENV.DB_NAME - SERVER', process.env.DB_NAME)

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT as string, 10),
  }
);

export const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected with Sequelize');
    await sequelize.sync();  // Esto creará las tablas si no existen
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error connecting to PostgreSQL', error);
    process.exit(1);
  }
};


