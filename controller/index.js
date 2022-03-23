const express = require("express");
const app = express();
app.get("/", function(req,resp) {
    resp.send("Página principal");
});
app.get("/contato", function(req,resp) {
    resp.send("Página de contato");
});
app.get("/produto", function(req,resp) {
    resp.send("Página de produto");
});
app.get("/dados/:nome/:cargo", function(req,resp) {
    resp.send("<h1>Bom dia "+req.params.nome+"!</h1><h2>Você é um "+req.params.cargo+" hoje!</h2>");
});
app.listen(8081,function() {
    console.log("Servidor funcionando na url http://localhost:8081");
});
