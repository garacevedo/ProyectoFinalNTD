const express = require("express");
const router = express.Router();
const animalSchema = require("../models/m_users");
//const verifyToken = require('./validate_token');

// COMIENZO DEL CRUD PARA EL REGISTRO DE SESIÓN
// Nuevo usuario - inserta

router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

/*
// Consulta todos los animales
router.get("/animals", verifyToken, (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
    
});


// Consulta según un parámetro
router.get("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({ message: error }));
});

// Consulta similar a un WHERE
router.get("/animals_where", (req, res) => {
    animalSchema.find({tipo:'Gato'}, (err, data) => {
        if (err) //do something...
            console.log("error");
        data.map(animal => {
            //Do somethign with the user
            console.log(animal.edad);
        })
    });
});


// Actualizar 
router.put("/animals/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo } = req.body;
    animalSchema
        .updateOne({ _id: id}, {
            $set: {nombre, edad, tipo}
        })
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});

// Delete
router.delete("/animals/:id", (req, res) => {
    const { id } = req.params;
    
    animalSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});
*/
module.exports = router;