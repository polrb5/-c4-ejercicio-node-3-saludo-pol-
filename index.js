require("dotenv").config();
const { program } = require("commander");
const { guardarSaludo } = require("./utilidades/archivos.js");
const chalk = require("chalk");

program.option("-n,--nombre <nombre>", "Tu nombre");
program.parse();

const opciones = program.opts();
if (opciones.nombre) {
  guardarSaludo(opciones.nombre);
} else {
  console.log(chalk.yellow("No se ha enviado el nombre"));
  process.exit(1);
}
