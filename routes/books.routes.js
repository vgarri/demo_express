const router = require('express').Router();//crea objeto router para poderlo llenar
const booksController = require('../controllers/books.controller'); //importamos el controller, no hace falta poner .js

// CRUD --> CREATE, READ, UPDATE, DELETE

// Params:
// http://localhost:3000/api/books/quijote
// http://localhost:3000/books/
// http://localhost:3000/books/celestina

router.get("/:title?", booksController.getBook); //router.get adhiere el metodo al router

/*
{
  "title": "Don Quijote de la Mancha",
  "author":"Miguel de Cervantes",
  "pages": 2000,
  "year":1550,
  "description": "en un lugar de la mancha..."
}
*/
// POST http://localhost:3000/api/books
router.post("/", booksController.createBook); //logica de "negocio", la logica que tiene que tener cada ruta

// PUT http://localhost:3000/api/books
router.put("/",  booksController.editBook);

// DELETE http://localhost:3000/api/books/quijote
router.delete("/:title?", booksController.deleteBook);

router.patch("/", booksController.deleteBook);

module.exports = router;//exporta el objeto router que es el conjunto de rutas preparadas