import express, { Application } from 'express';
import dotenv from 'dotenv';
import {connectDB} from './db';
import cors from 'cors';
import usuarioRutas from '../usuarios/infraestructura/rutas/usuarioRutas';
import productoRutas from '../productos/infraestructura/rutas/productoRutas';


dotenv.config();
connectDB();

console.log('PROCESS.ENV.DB_NAME - SERVER', process.env.DB_NAME)
const app: Application = express();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3001', // Permitir solicitudes desde el frontend
    methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
    credentials: true // Permitir el envío de cookies si es necesario
}));

app.use(express.json());

app.use('/api', usuarioRutas);
app.use('/api', productoRutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
