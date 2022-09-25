//controller.js

function suma(a,b) {
    return a + b
}

function multiplica(a,b) {
    return a * b
}
module.exports = {
    suma,
    multiplica
}

//index.js
import axios from "axios";
import chalk from 'chalk';
const funciones = require("./controller.js");

console.log(funciones.suma(1,2));
console.log(funciones.suma(4,5));

console.log(chalk.green(suma(4,5)));
