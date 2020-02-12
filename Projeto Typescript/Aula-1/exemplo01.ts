import * as rs from 'readline-sync';

const nome = rs .question('Entre com o seu nome: ');

const message: string = 'Ola, ' + nome + '!';

console.log(message);