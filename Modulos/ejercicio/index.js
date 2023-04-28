import { multiplicacion, suma } from "./modulos/controller.js";

let multi = multiplicacion(suma(1, 2), suma(4, 5));
console.log(multi);

import chalk from 'chalk';
console.log(chalk.green(multi));