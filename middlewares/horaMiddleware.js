//De aquí sacaremos la hora. Recuerda que hay que pasarla como una req y 
// con js podemos obtener la fecha con new Date()

const horaMiddleware = (req , res, next) => {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const formatedTime = `${hours}:${minutes}:${seconds}`;

    req.dateType = `La hora actual es ${formatedTime}.`;
    req.horaActual = now.getHours();
    next();
}
module.exports = horaMiddleware;