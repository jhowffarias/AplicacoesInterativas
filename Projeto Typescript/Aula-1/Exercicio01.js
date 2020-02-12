"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numero1 = rs.question('Digite o primeiro numero: ');
var numero2 = rs.question('Digite o segundo numero: ');
var numero3 = rs.question('Digite o terceiro numero: ');
var message = 'O resultado da multiplicação é : ' + (numero1 * numero2 * numero3);
console.log(message);
