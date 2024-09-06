import { Router } from 'express';
import { crearProducto, obtenerProductoPorId, obtenerTodosLosProductos, actualizarProducto, eliminarProducto } from '../controladores/productoControlador';

const router: Router = Router();

router.post('/productos', crearProducto);
router.get('/productos/:id', obtenerProductoPorId);
router.get('/productos', obtenerTodosLosProductos);
router.put('/productos/:id', actualizarProducto);
router.delete('/productos/:id', eliminarProducto);

export default router;
