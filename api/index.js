const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb+srv://maguirrem6:k0xlag63WA09R6Mk@aws-tier.8p32w3v.mongodb.net/?retryWrites=true&w=majority&appName=AWS-TIER';
const finalUri = uri.replace('<password>', 'TU_CONTRASEÑA'); // Reemplaza 'TU_CONTRASEÑA' con tu contraseña real

mongoose.connect(finalUri)
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    console.log('Error al conectar a la base de datos:', err);
  });

// Rutas
const usersRoute = require('./models/Rutausers');
app.use('/Rutausers', usersRoute);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
