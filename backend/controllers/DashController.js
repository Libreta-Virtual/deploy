// import modelo
import DashModel from '../models/DashModel.js'

//** Metodos CRUD **/

// Mostrar todos los registros
export const getDashs = async (req, res) => {
    try {
        const dashs = await DashModel.findAll()
        res.json(dashs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getDash = async (req, res) => {
    try {
        const dash = await DashModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(dash[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Crear un registro
export const createDash = async (req, res) => {
    try {
        await DashModel.create(req.body)
        res.json({ message: "Registro creado" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateDash = async (req, res) => {
    try {
        await DashModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro actualizado" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteDash = async (req, res) => {
    try {
        await DashModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: "Registro eliminado" })
    } catch (error) {
        res.json({ message: error.message })
    }
}