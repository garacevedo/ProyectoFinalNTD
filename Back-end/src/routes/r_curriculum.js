const express = require("express");
const router = express.Router();
const userSchema = require("../models/m_users");
//insertar los datos correspondientes a la hoja de vida
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
