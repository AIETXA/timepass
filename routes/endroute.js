//Un texto dando la bienvenida y la ruta donde estamos

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Bienvenidos</h1><br><h2>La hora actual es ${formatedTime}`);
});