const express = require('express')
const path = require('path')

const app = express();
const port = 3000;

// Ruta para servir el archivo JSON
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'data', 'products.json'));
});

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API is running. Access the data ');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app