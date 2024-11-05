const Provider = require('../models/providers.model');
const Product = require('../models/products.model');

const obtenerProveedores = async () => {
    return await Provider.find();
};

const obtenerProveedorPorId = async (id) => {
    return await Provider.findById(id);
};

const crearProveedor = async (datosProvider) => {
    const provider = new Provider(datosProvider);
    return await provider.save();
};

const editProvider = async (name, data) => {
    return await Provider.findOneAndUpdate(name, data, { new: true });
};

const deleteProvider = async (name) => {
    
    return await Provider.findOneAndDelete(name);
};

module.exports = {
    obtenerProveedores,
    obtenerProveedorPorId,
    crearProveedor,
    editProvider,
    deleteProvider
};