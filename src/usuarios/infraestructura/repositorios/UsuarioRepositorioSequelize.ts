import { IUsuarioRepositorio } from '../../dominio/repositorios/IUsuarioRepositorio';
import { Usuario } from '../modelos/usuarioModelo'; // Modelo Sequelize
import { IUsuario } from '../../dominio/entidades/usuario';

// Implementación del repositorio utilizando Sequelize
export class UsuarioRepositorioSequelize implements IUsuarioRepositorio {
  async crear(usuarioData: IUsuario): Promise<Usuario> {
    return await Usuario.create(usuarioData);
  }

  async obtenerPorId(id: string): Promise<Usuario | null> {
    return await Usuario.findByPk(id);
  }

  async obtenerTodos(): Promise<Usuario[]> {
    return await Usuario.findAll();
  }

  async actualizar(id: string, usuarioData: Partial<IUsuario>): Promise<Usuario | null> {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
    await usuario.update(usuarioData);
    return usuario;
  }

  async eliminar(id: string): Promise<Usuario | null> {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
    await usuario.destroy();
    return usuario;
  }
}
