const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt")

const curriculumSchema = mongoose.Schema({
    nombre_curriculum: {
        type: String,
        required: true
        //unique: true
    },
    pagina_web: [{
        nombre_pagina: {type: String, required: true},
        url : {type: String, required: true}
    }],
    perfil_profesional: {
        type: String,
        required: true
    },
    experiencia: [{
        puesto_laboral: {type: String, required: true},
        empleador : {type: String, required: true},
        fecha_inicio : {type: Date, required: true},
        fecha_fin : {type: String, required: true},
        descripcion : {type: String, required: true}
    
    }],
    formacion_academica: [{
        titulo : {type: String, required: true},
        universidad_entidad : {type: String, required: true},
        fecha_inicio : {type: Date, required: true},
        fecha_fin : {type: String, required: true},
        descripcion : {type: String, required: true}
    }],
    reconocimientos: [{
        nombre : {type: String, required: true},
        fecha_inicio : {type: Date, required: true},
        fecha_fin : {type: String, required: true},
        descripcion : {type: String, required: true}
    }],
    proyectos: [{
        nombre : {type: String, required: true},
        descripcion : {type: String, required: true}
    }],
    idiomas: {
        type: String,
        required: true
    },
    tipo_curriculum:{
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Curriculum', curriculumSchema);

/*

{
    "nombre_curriculum": "CvFB",
    "nombre": "Gabriel Rodirguez",
    "direccion":" calle 1 # 49-78",
    "telefono" : "3214569987",
    "correo" : "gabriel.rodriguez@gmail.com",
    "pagina_web" : [{"nombre_pagina": "github", "url":"www.github.com"}],
    "experiencia" :[{"puesto_laboral":"ingeniero", "empleador": "Google","fecha_inicio": "02/02/2002","fecha_fin":"02/02/2005", "descripcion":"Buen ingeniero"}],
    "formacion_academica" :[{"titulo":"Ingeniero de sistemas","universidad_entidad": "FULK", "fecha_inicio":"02/02/1999", "fecha_fin":"02/02/2002", "descripcion": "pregrado"}],
    "reconocimientos" : [{"nombre":"20° puesto maraton nacional","fecha_inicio":"02/02/2005", "descripcion":"ICPC"}],
    "proyectos" :[{"nombre":"3 en linea","descripcion":"juego de 3 en liena hecho en JavaScript"} ],
    "idiomas" :"Ingles y español"


}
*/