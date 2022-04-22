const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
    required: true
    },
    correo: {
        type: String,
    required: true
    },
    nacionalidad: {
        type: String,
    required: true
    },
    perfilPro: {
        type: String,
    required: false
    },
    formacion_academica: {
        type: String,
    required: false
    }

});

module.exports = mongoose.model('Usuario', userSchema);
