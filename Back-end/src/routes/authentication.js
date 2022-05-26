const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/m_users");
const bcrypt = require("bcrypt")
//const jwt = require('jsonwebtoken')


router.post('/signup', async(req, res) => {
    const { usuario, nombre, correo, clave, direccion, telefono, curriculums} = req.body;
    const user = new userSchema({
        usuario: usuario,
        nombre: nombre,
        correo: correo,
        clave: clave,
        direccion: direccion,
        telefono:telefono,
        curriculums: curriculums
    });
    user.clave = await user.encryptClave(user.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB 
    //res.json(user);
    res.json({
        message: "Usuario guardado exitosamente."
    });
});

module.exports = router;


//inicio de sesión
router.post('/login', async(req, res) => {
    // validaciones
    
    const { error } = userSchema.validate(req.body.correo, req.body.clave);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const user = await userSchema.findOne({ correo: req.body.correo }). then(data => {res.json(data)});
    /*if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });
    
    const validPassword = await bcrypt.compare(req.body.clave, user.clave);
    console.log(req.body.clave);
    console.log(user.clave);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' });

    res.json({
        error: null,
        data: 'Esoooooooo exito bienvenido'
    })
/*
{        
        "correo": "gabriel@gmail.com",
        "clave": "123456"
}
*/

/*
    //primer parámetro: payload - un dato que se agrega para generar el token
    //segundo parámetro: un texto que hace que el código generado sea único
    //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    const token = jwt.sign(
        { id: user._id },
            process.env.SECRET,
        { 
           expiresIn: 60 * 60 * 24 //un día en segundos 
        }
    );
    res.json({
        auth: true,
        token
    }
    );*/
})




    