const Provider = require('../models/providers.model');
const Product = require('../models/products.model');

const obtenerTodosLosProveedores = async () => {
    return await Provider.find();
};

const obtenerProveedorPorId = async (id) => {
    return await Provider.findById(id);
};

const crearProveedor = async (datosProvider) => {
    const provider = new Provider(datosProvider);
    return await provider.save();
};

const editProvider = async (id, data) => {
    return await Provider.findByIdAndUpdate(id, data, { new: true });
};

const deleteProvider = async (id) => {
    
    return await Provider.findByIdAndDelete(id);
};

module.exports = {
    obtenerTodosLosProveedores,
    obtenerProveedorPorId,
    crearProveedor,
    editProvider,
    deleteProvider
};