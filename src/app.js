require("dotenv/config");
const express = require("express");
const cors = require("cors");
const router = require("./routes");

// init
const app = express();

// settings
const PORT = process.env.PORT || 3000;
app.set("port", PORT);

// middlewares
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Configuración de autorización
app.use((req, res, next) => {
  const organization = req.headers.organization;

  // Aquí debes agregar la lógica para validar la organización
  if (organization === process.env.OPENAI_ORGANIZATION) {
    next(); // Continuar con la siguiente función de middleware
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(router);

module.exports = app;
