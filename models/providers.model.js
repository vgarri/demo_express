const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB


const objectSchema = {
    companyName: { 
        type: String, 
        required: true,
        unique: true 
    },

    CIF: {
        type: String, 
        required: true,
        unique: true 

    },
    adress: {
        type: String, 
        required: true,
        unique: true 

    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function(url){
                if(url.indexOf('http') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Porfa, introduce una URL válida"
        }
    }
    
}

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;










/* PRUEBAS
// Insertar un proveedor
const p = new Provider({
    companyName: "La casa de las flores",
    website: "https://www.lacasadelasflores.com",
    image:"https://www.lacasadelasflores.com/imagen.jpg"
});

// Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err))

// Insertar otro proveedor
const p2 = new Provider({
    companyName: "La casa de las plantas",
    website: "https://www.lacasadelasplantas.com",
    image:"https://www.lacasadelasplantas.com/imagen.jpg"
});

// Guardar en la BBDD
p2.save()
.then((data)=>console.log(data))
*/