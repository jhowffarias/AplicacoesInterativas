"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var nome = rs.question('Entre com o seu nome: ');
var message = 'Ola, ' + nome + '!';
console.log(message);
