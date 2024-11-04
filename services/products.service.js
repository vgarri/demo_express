const Product = require('../models/products.model');

const obtenerTodosLosProductos = async (id) => {
            return id
            ? await Product.find({id},'-__v').populate('provider', '-_id -__v') 
            : await Product.find({},'-__v').populate(); //{}

};

const obtenerProductoPorId = async (id) => {
    return await Product.findById(id);
};
//pasar un id numerico porque daba problemas con el del profe
const crearProducto = async (datosProduct) => {
    const product = new Product(datosProduct);
    return await product.save();
};
//aqui se pasa el id de objeto mongoDB
const editProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
    
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    obtenerTodosLosProductos,
    obtenerProductoPorId,
    crearProducto,
    editProduct,
    deleteProduct
};