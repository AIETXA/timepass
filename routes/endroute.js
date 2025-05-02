//Un texto dando la bienvenida y la ruta donde estamos

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Bienvenidos a /endroute</h1><p>Accediste correstamente a la ruta final</p><a href="/">Volver al inicio</a>');
});
module.exports = router;