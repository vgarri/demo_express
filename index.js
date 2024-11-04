/* Una librería te permite solucionar un problema concreto, mientras que un framework te brinda un set de 
herramientas para desarrollar sistemas o aplicaciones. Un framework, por lo general, contiene librerías (algunas veces no), 
provee buenas prácticas y resulta toda una experiencia de desarrollo.*/
//Express es un Framework de backend
//Angular tb
//se debe usar la misma ruta, lo q cambia son los metodos de envio (GET POST PUT ETC)

const express = require('express') //importamos paquete express
const app = express() // inicializar servidor con express
const port = process.env.PORT || 3000 // puerto a usar por el server
app.use(express.json()); // Middleware para parsear el body de las peticiones

const booksRoutes = require("./routes/books.routes")
const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
const providersRoutes = require("./routes/providers.routes")
//importamos los middlewares
const manage404 = require("./middlewares/manage404")
const checkApiKey = require("./middlewares/auth_api_key")
const morgan = require("./middlewares/morgan")
// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Rutas a Habilitar
//API
app.use('/api/books',checkApiKey,booksRoutes); // a nivel global ponemos el checkApiKey.
app.use('/api/products',productsRoutes); //prefijo de las rutas, todas llevan /api/books blabla app.use es middleware
app.use('/api/entries',entriesRoutes);
app.use('/api/providers', providersRoutes);


// GET http://localhost:3000/perros/toby
// GET http://localhost:3000/perros/mordisquitos
// GET http://localhost:3000/perros/bolita
// GET http://localhost:3000/perros/23
// GET http://localhost:3000/perros --> devuelve todos los perros
// GET http://localhost:3000/perros/bolito

app.get("/perros/:name?",checkApiKey, (req, res) => {
    // ? indica que el parametro es opcional
    const name = req.params.name; // leer el parametro name
    //Habría que sustitur las siguientes líneas (28-35) por una llamada a mi BBDD SQL
    // select * from perros where name = name
    //perros.model.getPerrosByName(name)
    const perros = [
      { name: "mordisquitos", age: 2 },
      { name: "toby", age: 3 },
      { name: "peluson5", age: 5 },
      { name: "bob", age: 3 },
    ];
    if (name) {
      const perro = perros.find((perro) => perro.name === name);
  
      perro // perro encontrado????
        ? res.status(200).json(perro) // si lo encuentra, devuelvo el perro
        : res.status(404).json({ message: name + " no encontrado" }); // sino, objeto con un mensaje
    } else {
      res.status(200).json(perros); // devuelve todos los perros
    }
  });


//para rutas no existentes o erroneas, aplicamos el middleware
app.use("*", manage404);
//para api key incorrecta

app.listen(port, () => {
    console.log(`Demo_Express listening on http://localhost:${port}`)
});
// //se pueden enviar cosas por params (req.params)
// //por body (req.body)
// //por query (req.query)


