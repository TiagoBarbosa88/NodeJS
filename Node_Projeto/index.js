const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

let customers = [
  { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
  { id: 2, name: "Google", site: "http://google.com.br" },
  { id: 3, name: "Uol", site: "http://uol.com.br" },
];

server.get("/customers", (req, res) => {
  return res.json(customers);
});


server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find(item => item.id === id);
  const status = customer ? 200 : 404;

  return res.status(status).json(customer);
});

server.listen(3000);