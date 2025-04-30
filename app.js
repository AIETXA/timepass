const express = require('express');
const app = express();
const PORT = 3000;

const horaMiddleware = ('./middlewares/horaMiddleware');
const validarHora = ('./middlewares/validarHora');

const endrouteRouter = require('./routes/endroute');
const indexRouter = require('./routes/index');

app.use(horaMiddleware);
app.use('/', indexRouter);
app.use('/endroute', validarHora, endrouteRouter)

module.exports = app;