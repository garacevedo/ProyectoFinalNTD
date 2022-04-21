/*
Instalar express
MOONGOSE 
DOTENV
*/
const parser = require("body-parser");
const mongoose = require("mongoose")
const express = require('express')
const app =  express()
const port = 3000
const userRoutes = require("./routes/r_users");
//const authRoutes = require("./routes/authentication");

require('dotenv').config();

app.use(parser.urlencoded({extend: false}));  // permite leer los datos que vienen en la petición
app.use(parser.json()); // transformar los datos a formato json



// Gestión de las rutas usando el middleware
app.use("/api", userRoutes);
//app.use("/api", authRoutes);
app.use(express.json());




// Conexión a la base de datos
mongoose   
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

app.get('/', (req,res) => {
    res.send('¡Hola Mundo!')
})


// Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
///Back-end/src/routes/r_users.js