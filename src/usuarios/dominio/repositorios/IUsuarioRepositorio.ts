import { IUsuario } from '../entidades/usuario';

// Definir la interfaz para el repositorio de usuarios
export interface IUsuarioRepositorio {
  crear(usuarioData: IUsuario): Promise<IUsuario>;
  obtenerPorId(id: string): Promise<IUsuario | null>;
  obtenerTodos(): Promise<IUsuario[]>;
  actualizar(id: string, usuarioData: Partial<IUsuario>): Promise<IUsuario | null>;
  eliminar(id: string): Promise<IUsuario | null>;
}
