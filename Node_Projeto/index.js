const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
  res.json({
    title: "Hello World", 
    message: "Olá meu amigo, tudo bem ?"
  });
});


server.listen(port);