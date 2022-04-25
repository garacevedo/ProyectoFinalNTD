const express = require("express");
const router = express.Router();
const curriculumSchema = require("../models/m_curriculum");



//C: Insertar los datos correspondientes a la hoja de vida
router.post("/curriculum", (req, res) => {
    const curriculum = curriculumSchema(req.body);
    curriculum
        .save().then((data) => {res.json(data)})
        .catch((error) => res.json({ message: error }));
})

// R: Consultar los datos de la hoja de vida
router.get("/curriculum",  (req, res) => {
    curriculumSchema.find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
    
});


// U: Actualizar datos de la hoja de vida
router.put("/curriculum/:id", async(req, res) => {
    const { id } = req.params;
    const { nombre, direccion,telefono,correo, nacionalidad,perfilPro,formacion_academica } = req.body;
    
    curriculumSchema
        .updateOne({ _id: id}, {
            $set: {nombre, direccion,telefono,correo, nacionalidad,perfilPro,formacion_academica  }
        })
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});



// D: Elimina una hoja de vida por su ID
router.delete("/curriculum/:id", (req, res) => {
    const { id } = req.params;
    
    curriculumSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});

module.exports = router;
