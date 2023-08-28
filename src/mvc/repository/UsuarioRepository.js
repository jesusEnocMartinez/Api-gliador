const user = require('../../../data/models/usuario'); // Asegúrate de que la ruta sea correcta

class UsuarioRepository {
  async crearUsuario(datosUsuario) {
    try {
      const nuevoUsuario = await user.create(datosUsuario);
      return nuevoUsuario;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UsuarioRepository();
