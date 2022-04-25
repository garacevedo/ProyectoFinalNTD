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
// R: Consultar los datos de la hoja de vida
router.get("/curriculum",  (req, res) => {
    curriculumSchema.find()
        .then((data) => res.json(data))
        .catch((error) => req.json({message: error}));
    
});


// U: Actualizar datos de la hoja de vida
router.put("/curriculum/:id", async(req, res) => {
    const { id } = req.params;
    const { nombre_curriculum, pagina_web, perfil_profesional, experiencia,formacion_academica } = req.body;
    //console.log(nombre_curriculum);
    curriculumSchema
        .updateOne({ _id: id}, {
            $set: { nombre_curriculum, pagina_web, perfil_profesional, experiencia,formacion_academica }
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
