
const productsService = require('../services/products.service');

// CREATE
const createProduct = async (req, res) => {
    console.log(req.body);

    try{
        const data = req.body;
        let answer = await productsService.crearProducto(data);
        res.status(201).json({
            message: "Se ha creado correctamente el producto",
            data: answer
        });

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// READ
const getProduct = async (req, res) => {
        try {
            const products = await productsService.obtenerTodosLosProductos(req.params.id);
            res.status(200).json(products); // Respuesta de la API para 1 producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: ${error.stack}`});
        }
}

// UPDATE
const editProduct = async (req, res) => {
    try {
        const editedProduct = await productsService.editProduct(req.params.id, req.body);
        if (editedProduct) {
            res.status(200).json({
                message: `producto actualizado: ${editedProduct.title}`, 
                product: editedProduct});
            
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }

}


// DELETE
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productsService.deleteProduct(req.params.id);
        if (deletedProduct) {
            res.status(200).json({
                message: `producto eliminado: ${deletedProduct.title}`
            })
            
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
    
}

module.exports = {
    createProduct,
    getProduct,
    editProduct,
    deleteProduct
}