var http = require('https');
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./router/router");
app.use(cors());
app.use(routes);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const erro = new Error("Nâo existe essa rota!");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});
app.listen(process.env.PORT || 3003, () => console.log("servidor rondando!"));
