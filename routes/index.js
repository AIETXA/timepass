/* 
En esta ruta habrá lo siguiente:
- Un texto de bienvenida y la hora actual
- Un botón que enlace `/endroute`
- Al clickar tendrá que validar con el middleware `validarHora.js`si la hora es correcta para poder continuar. Solo se podrá acceder a `/endroute` si la hora es está entre las 12h de la mañana y las 24h.
- Si es antes de las 12 al clickar en el botón nos saldrá un mensaje que diga algo como "Aún no son las 12 de la mañana"
- Si accedemos directamente a la ruta `/endroute`, nos devolverá el mismo error y misma ruta que si pulsaramos el botón */


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Bienvenidos</h1><br><h2>La hora actual es ${formatedTime}`);
});
router.get()