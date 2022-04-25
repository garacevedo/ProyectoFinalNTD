const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
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
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    curriculums : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum'}]
});

userSchema.methods.encryptClave = async(clave) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave, salt);
}
module.exports = mongoose.model('Usuario', userSchema);
