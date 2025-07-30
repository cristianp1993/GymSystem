const Ejercicio = require('../models/Ejercicio');

exports.getAll = async (req, res) => {
    try {
        const ejercicios = await Ejercicio.findAll();
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los ejercicios', error });
    }
}

exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const ejercicio = await Ejercicio.findByPk(id);
        if (!ejercicio) {
            return res.status(404).json({ message: 'Ejercicio no encontrado' });
        }
        res.status(200).json(ejercicio);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el ejercicio', error });
    }
}

exports.create = async (req, res) => {
    const { nombre, descripcion, url_video } = req.body;
    try {
        const nuevoEjercicio = await Ejercicio.create({ nombre, descripcion, url_video });
        res.status(201).json(nuevoEjercicio);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el ejercicio', error });
    }
}

exports.update = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, url_video } = req.body;
    try {
        const ejercicio = await Ejercicio.findByPk(id);
        if (!ejercicio) {
            return res.status(404).json({ message: 'Ejercicio no encontrado' });
        }
        ejercicio.nombre = nombre;
        ejercicio.descripcion = descripcion;
        ejercicio.url_video = url_video;
        await ejercicio.save();
        res.status(200).json(ejercicio);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el ejercicio', error });
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const ejercicio = await Ejercicio.findByPk(id);
        if (!ejercicio) {
            return res.status(404).json({ message: 'Ejercicio no encontrado' });
        }
        await ejercicio.destroy();
        res.status(200).json({ message: 'Ejercicio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el ejercicio', error });
    }
}