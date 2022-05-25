const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: false
    },
    nombre: {
        type: String,
        required: false
    },
    correo: {
        type: String,
        required: false
    },
    clave: {
        type: String,
        required: false
    },
    direccion: {
        type: String,
        required: false
    },
    telefono: {
        type: Number,
        required: false
    },
    curriculums : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum'}]
});

userSchema.methods.encryptClave = async(clave) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave, salt);
}
module.exports = mongoose.model('Usuario', userSchema);
