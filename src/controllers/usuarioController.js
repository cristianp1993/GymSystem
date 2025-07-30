const Usuario = require('../models/Usuario');

const usuarioController = {
    getAll: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            res.status(500).json({ error: 'Error al obtener usuarios' });
        }
    },

    create: async (req, res) => {
        try {
            const nuevoUsuario = await Usuario.create(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            console.error("Error al crear usuario:", error);
            res.status(500).json({ error: 'Error al crear usuario' });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            res.status(500).json({ error: 'Error al obtener usuario' });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            await usuario.update(req.body);
            res.status(200).json(usuario);
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            res.status(500).json({ error: 'Error al actualizar usuario' });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            await usuario.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
    }
};

module.exports = usuarioController;
