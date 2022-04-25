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
/*
{
    "usuario" : "Gab34",
    "nombre" : "gabriel",
    "correo" : "gabriel@gmail.com",
    "clave" : "123456",
    "direccion" : "calle 1 # 69-78",
    "telefono": "3256987452",
    "curriculums" :[]
}
*/


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
        //.then((data) => res.json({"nombre":data.nombre,"correo": data.correo}))
        .then((data) => res.json(data))
        .catch((error) => req.json({ message: error }));
});


// U: Actualizar el usuario

router.put("/users/:id", async(req, res) => {
    const { id } = req.params;
    const { usuario, nombre, correo, clave, direccion, telefono, curriculums } = req.body;
    console.log(usuario);
    userSchema
        .updateOne({ _id: id}, {
            
            $set: {usuario, nombre, correo, clave, direccion, telefono, curriculums}
        })
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});
/*
{
    "telefono" : "321565698"
}
*/

// U: Actualizar con un curriculum
router.put("/users_curriculum/:id", async(req, res) => {
    const { id } = req.params;
    //const { nombre, correo, clave } = req.body;
    const curriculum = curriculumSchema(req.body);
    var idCurriculum = null;
    

    const curriculumConsulta = await curriculumSchema.findOne({nombre_curriculum: req.body.nombre_curriculum});
    console.log(req.body.nombre_curriculum+" bodyyyyyyyyy");
    if(!curriculumConsulta){
        await curriculum.save().then((dataCurriculum) => {
            idCurriculum = dataCurriculum._id;
            
        });
       
    }else{
        idCurriculum = curriculumConsulta._id;
    }
    //console.log(idCurriculum);
    await userSchema
        .updateOne({ _id: id}, {
            //$set: {nombre, correo, clave }
            $addToSet: {curriculums: idCurriculum}
            
        })
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
        
});
/*
{
    "nombre_curriculum": "CvFB2",
    "pagina_web" : [{"nombre_pagina": "github", "url":"www.github.com"}],
    "perfil_profesional" :"Buen tabajador",
    "experiencia" :[{"puesto_laboral":"ingeniero", "empleador": "Google","fecha_inicio": "02/02/2002","fecha_fin":"02/02/2005", "descripcion":"Buen ingeniero"}],
    "formacion_academica" :[{"titulo":"Ingeniero de sistemas","universidad_entidad": "FULK", "fecha_inicio":"02/02/1999", "fecha_fin":"02/02/2002", "descripcion": "pregrado"}],
    "reconocimientos" : [{"nombre":"20° puesto maraton nacional","fecha_inicio":"02/02/2005", "fecha_fin":"NA","descripcion":"ICPC"}],
    "proyectos" :[{"nombre":"3 en linea","descripcion":"juego de 3 en liena hecho en JavaScript"} ],
    "idiomas" :"Ingles y español",
    "tipo_curriculum": "Básico"


}
*/


// D: Elimina un usuario por su ID
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    
    userSchema
        .remove({_id:id})
        .then((data) => res.json(data))
        .catch((error) => req.json({ message : error}));
});

module.exports = router;



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