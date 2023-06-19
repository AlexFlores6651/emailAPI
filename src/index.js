const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./Email');
const configReservacion = require('./EmailR.js')
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
});

app.post('/reservacion', (req, res) => {
  configReservacion(req.body);
  res.status(200).send();
})

app.listen(port, () => {
  console.log('Servidor corriendo')
});