let express = require('express');// requiero express
let app = express();// ejecuto express
const path = require('path');// requiero path
app.listen(3030, () => console.log('Servidor levantado'));// escucha el servidor la solitudes que se hagan-request- en ese puerto
app.use(express.static("public/img"));// busca los archivos estaticos a la carpeta public/img



//SISTEMAS DE RUTAS
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get("/cbabbage", function(req, res){
    res.sendFile(path.join(__dirname, 'views/babbage.html'));
});
app.get("/aturing", function(req, res){
    res.sendFile(path.join(__dirname, 'views/turing.html'));
});
app.get("/ghopper", function(req, res){
    res.sendFile(path.join(__dirname, 'views/hopper.html'));
});
app.get("/mhamilton", function(req, res){
    res.sendFile(path.join(__dirname, 'views/hamilton.html'));
});
app.get("/eclarke", function(req, res){
    res.sendFile(path.join(__dirname, 'views/clarke.html'));
});
app.get("/tberners-lee", function(req, res){
    res.sendFile(path.join(__dirname, 'views/berners-lee.html'));
});
app.get("/alovelace", function(req, res){
    res.sendFile(path.join(__dirname, 'views/lovelace.html'));
});

    










