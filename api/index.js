var express = require('express');
var app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.send("Estoy funcionando desde docker  asdasdq12312313123 asdasdsd :)");
});

app.listen(3000, function(req, res) {
    console.log("API funcionando en el puerto 4005 con docker");
});