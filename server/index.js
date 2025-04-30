process.removeAllListeners('warning');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const dbRoutes = require('./routes/dbRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/db', dbRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionando en el puerto http://localhost:${PORT}`));

// Prueba base de datos
// http://localhost:3000/api/db/check

console.log('Server running...');