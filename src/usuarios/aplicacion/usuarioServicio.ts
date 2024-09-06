import { IUsuarioRepositorio } from '../dominio/repositorios/IUsuarioRepositorio';
import { IUsuario } from '../dominio/entidades/usuario';

export class UsuarioServicio {
  private repositorio: IUsuarioRepositorio;

  constructor(repositorio: IUsuarioRepositorio) {
    this.repositorio = repositorio;
  }

  async crearUsuario(usuarioData: IUsuario): Promise<IUsuario> {
    return await this.repositorio.crear(usuarioData);
  }

  async obtenerUsuarioPorId(id: string): Promise<IUsuario | null> {
    return await this.repositorio.obtenerPorId(id);
  }

  async obtenerTodosLosUsuarios(): Promise<IUsuario[]> {
    return await this.repositorio.obtenerTodos();
  }

  async actualizarUsuario(id: string, usuarioData: Partial<IUsuario>): Promise<IUsuario | null> {
    return await this.repositorio.actualizar(id, usuarioData);
  }

  async eliminarUsuario(id: string): Promise<IUsuario | null> {
    return await this.repositorio.eliminar(id);
  }
}
