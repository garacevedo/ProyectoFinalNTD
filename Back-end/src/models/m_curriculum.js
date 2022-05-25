const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt")

const curriculumSchema = mongoose.Schema({
    nombre_curriculum: {
        type: String,
        required: false
        //unique: true
    },
    pagina_web: [{
        nombre_pagina: {type: String, required: false},
        url : {type: String, required: false}
    }],
    perfil_profesional: {
        type: String,
        required: false
    },
    experiencia: [{
        puesto_laboral: {type: String, required: false},
        empleador : {type: String, required: false},
        fecha_inicio : {type: Date, required: false},
        fecha_fin : {type: String, required: false},
        descripcion : {type: String, required: false}
    
    }],
    formacion_academica: [{
        titulo : {type: String, required: false},
        universidad_entidad : {type: String, required: false},
        fecha_inicio_fa : {type: Date, required: false},
        fecha_fin_fa : {type: String, required: false},
        descripcion_fa : {type: String, required: false}
    }],
    reconocimientos: [{
        nombre_r : {type: String, required: false},
        fecha_inicio_r : {type: Date, required: false},
        fecha_fin_r : {type: String, required: false},
        descripcion_r : {type: String, required: false}
    }],
    proyectos: [{
        nombre_p : {type: String, required: false},
        descripcion_p : {type: String, required: false}
    }],
    idiomas: {
        type: String,
        required: false
    },
    tipo_curriculum:{
        type: String,
        required: false
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