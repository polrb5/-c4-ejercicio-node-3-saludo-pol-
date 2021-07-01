const fs = require("fs");

const guardarSaludo = (nombre) => {
  fs.writeFile("textos/saludo.txt", `Hola, ${nombre}. Encantado de saludarte.`}
