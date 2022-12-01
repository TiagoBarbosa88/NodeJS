const express = require('express');
const server = express();
const port = 3000;

// http://localhost:3000/hello?nome=Tiago&idade=34
// Query params = ?nome=Tiago&idade=34
server.get('/hello', (req, res) => {
  const { nome, idade } = req.query;

  return res.json({
    title: "Hello World",
    message: `Olá ${nome}, tudo bem ?`,
    idade: idade
  });
});



// http://localhost:3000/hello/Tiago
// Route params = /hello/?nome
server.get("/hello/:nome", (req, res) => {
  const {nome} = req.params;

  return res.json({
    title: "Hello World",
    message: `Olá ${nome}, tudo bem ?`
  });
});


server.listen(port);