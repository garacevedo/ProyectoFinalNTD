const express = require("express");
const router = express.Router();
const userSchema = require("../models/m_curriculum");

//C:insertar los datos correspondientes a la hoja de vida
router.post("/m_curriculum", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
// R:consultar los datos de la hoja de vida
router.get("/m_curriculum",  (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
    
});


// U: Actualizar datos de la hoja de vida
router.put("/m_curriculum/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, direccion,telefono,correo, nacionalidad,perfilPro,formacion_academica } = req.body;
    userSchema
        .updateOne({ _id: id}, {
            $set: {nombre, direccion,telefono,correo, nacionalidad,perfilPro,formacion_academica  }
        })
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});

