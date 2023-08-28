const express = require('express');
const app = express();
const port = 3000; 


app.get('/', (req, res) => {
    res.send('Backend--API--Gladiador');
});


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
