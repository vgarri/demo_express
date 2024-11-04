const mongoose = require("mongoose");
require('dotenv').config();
//mongoose.set('strictQuery', false);

// mongoose.connect("mongodb://localhost:27017/local", { useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect("mongodb://localhost:27017/local");
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;