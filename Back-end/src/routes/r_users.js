const express = require("express");
const router = express.Router();
const userSchema = require("../models/m_users");
const curriculumSchema = require("../models/m_curriculum");
//const verifyToken = require('./validate_token');

// COMIENZO DEL CRUD:

// C: Nuevo usuario - inserta

router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})


// R: Consulta todos los animales
router.get("/users",  (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
    
});


// R: Consulta según un parámetro
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => req.json({ message: error }));
});

/*
// Consulta similar a un WHERE
router.get("/users_where", (req, res) => {
    userSchema.find({tipo:'Gato'}, (err, data) => {
        if (err) //do something...
            console.log("error");
        data.map(user => {
            //Do somethign with the user
            console.log(user.edad);
        })
    });
});
*/

// U: Actualizar 
router.put("/users/:id", async(req, res) => {
    const { id } = req.params;
    //const { nombre, correo, clave } = req.body;
    const curriculum = curriculumSchema(req.params);
    var idCurriculum = null;
    

    const curriculumConsulta = await curriculumSchema.findOne({nombre_curriculum: req.body.nombre_curriculum});
    console.log(req.body.idiomas);
    if(!curriculumConsulta){
        await curriculum.save().then((dataCurriculum) => {
            idCurriculum = dataCurriculum.id_;
        });
    }else{
        idCurriculum = curriculumConsulta.id_;
    }

    userSchema
        .updateOne({ _id: id}, {
            //$set: {nombre, correo, clave }
            $addToSet: {curriculums: idCurriculum}
        })
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});



// D: Elimina un usuario por su ID
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    
    userSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});

module.exports = router;