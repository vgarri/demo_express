const Provider = require('../models/providers.model');
const providersService = require('../services/providers.service');

// CREATE
const createProvider = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await providersService.crearProveedor(data);
        res.status(201).json({
            message: "Proovedor creado",
            data: answer});

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// READ
const getProvider = async (req, res) => {
    try {
        const Providers = await providersService.obtenerProveedores();
        res.status(200).json(Providers); // Respuesta de la API para 1 Provider
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// UPDATE
const updateProvider = async (req, res) => {

            try {
                const editedProvider = await providersService.editProvider(req.params.id, req.body);
                if (editedProvider) {
                    res.status(200).json({
                        "provider_updated": editedProvider.companyName,
                        data: editedProvider
                    });
                    res.json(editedProvider);
                }
            }
            catch (error) {
                console.log(`ERROR: ${error.stack}`);
                res.status(400).json({ msj: `ERROR: ${error.stack}` });
            }

        }

        // DELETE
        const deleteProvider = async (req, res) => {
            try {
                const deletedProvider = await providersService.deleteProvider(req.params.id);
                if (deletedProvider) {
                    res.status(200).json({
                        message: `Provider: ${deletedProvider.companyName} deleted`
                    });
                }
            }
            catch (error) {
                console.log(`ERROR: ${error.stack}`);
                res.status(400).json({ msj: `ERROR: ${error.stack}` });
            }
            
        }

        module.exports = {
            createProvider,
            getProvider,
            updateProvider,
            deleteProvider
        }