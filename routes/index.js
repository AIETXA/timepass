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
    const dateType = req.dateType;
    const mensaje = req.query.mensaje || '';
    res.send(`
        <h1>Bienvenidos</h1>
        <br>
        <h2>${dateType}</h2>
        ${mensaje && `<p style="color:red">${mensaje}</p>`}
        <a href="/endroute"><button>Ir a ruta final</button></a>
      `);
       
});
module.exports = router;