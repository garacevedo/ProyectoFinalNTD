const mongoose = require("mongoose"); // importando el componente mogoose

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {

        type: String,
        required: true
    },
    clave: {
        type: String,
    required: true
    }
});
module.exports = mongoose.model('Animal', userSchema);
