import { Router } from 'express';
import { crearUsuario, obtenerUsuarioPorId, obtenerTodosLosUsuarios, actualizarUsuario, eliminarUsuario } from '../controladores/usuarioControlador';

const router: Router = Router();

router.post('/usuarios', crearUsuario);
router.get('/usuarios/:id', obtenerUsuarioPorId);
router.get('/usuarios', obtenerTodosLosUsuarios);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

export default router;
