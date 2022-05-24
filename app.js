const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require ("path");

app.listen(3000, () => console.log(`servidor corriendo en el puerto ${PORT}`));

app.use(express.static(__dirname + '/public'));

/* app.get('/', function(req, res) {
    res.send('Bienvenidos al sitio del ejercicio')
});  */

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/views/register.html');
});