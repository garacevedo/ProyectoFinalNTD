/*
Instalar express
*/

const express = require('express')
const app = express()

app.get ('/', (req, res) => {
    res.send('Esooo')
})

app.listen(port, () =>{
    console.log('Ejemplo esoo')
})