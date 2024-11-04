const mongoose = require("mongoose");

//mongoose.set('strictQuery', false);
const DATABASE_URL = "mongodb+srv://vgarritanoperez:VE6gdDHRgNKuYODC@cluster0.fymcs.mongodb.net/";
// mongoose.connect("mongodb://localhost:27017/local", { useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect("mongodb://localhost:27017/local");
mongoose.connect(DATABASE_URL)

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;