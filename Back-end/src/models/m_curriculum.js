const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt")

const curriculumSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    pagina_web: {
        nombre_pagina: String,
        url : String
    },
    perfil_profesional: {
        type: String,
        required: false
    },
    experiencia: {
        puesto_laboral: String,
        empleador : String,
        fecha_inicio : Date,
        fecha_fin : String,
        descripcion : String 

    },
    formacion_academica: {
        titulo : String,
        universidad_entidad : String,
        fecha_inicio : Date,
        fecha_fin : String,
        descripcion : String 
    },
    reconocimientos: {
        nombre : String,
        descripcion : String,
        fecha_inicio : Date,
        fecha_fin : String,
        descripcion : String 
    },
    proyectos: {
        nombre : String,
        descripcion : String
    },
    idiomas: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Curriculum', curriculumSchema);
