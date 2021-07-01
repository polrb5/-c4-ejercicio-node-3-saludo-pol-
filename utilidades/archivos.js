const fs = require("fs");
const chalk = require("chalk");

const error = chalk.bold.red;

const guardarSaludo = (nombre) => {
  fs.writeFile(
    "textos/saludo.txt",
    `Hola, ${nombre}. Encantado de saludarte.`,
    (err) => {
      if (err) {
        console.log(error("¡Algo ha salido mal!"));
      }
    }
  );
};

module.exports = {
  guardarSaludo,
};
