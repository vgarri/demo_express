const pool = require('../config/db_pgsql')
const queries = require('./queries') // Queries SQL

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432', //por defecto 5432
//     database: 'postgres',
//     password: '123456'
//   });

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
//UPDATE

const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    //deleteEntry
    //updateEntry
}

module.exports = entries;


// Pruebas

    //  getEntriesByEmail("birja@thebridgeschool.es")
    // .then(data=>console.log(data)) 



// getAllEntries()
// .then(data=>console.log(data))



// let newEntry = {
//     title: "Se acabaron las mandarinas de TB",
//     content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
//     email: "guillermu@thebridgeschool.es",
//     category: "sucesos"
// }

// createEntry(newEntry)
//     .then(data => console.log(data))

// getEntriesByEmail("guillermu@thebridgeschool.es")
//      .then(data=>console.log(data)) 