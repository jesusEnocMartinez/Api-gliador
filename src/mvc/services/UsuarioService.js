const UsuarioRepository = require('../../../src/mvc/repository/UsuarioRepository');

class UsuarioService {
    async agregarUsuario(datosUsuario) {
      try {
        const nuevoUsuario = await UsuarioRepository.crearUsuario(datosUsuario);
        return nuevoUsuario;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = new UsuarioService();