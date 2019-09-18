var express = require('express');
var app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.send("Docker con livereload");
});

app.listen(3000, function(req, res) {
    console.log("API funcionando en el puerto 4005 externo y 3000 para docker");
});