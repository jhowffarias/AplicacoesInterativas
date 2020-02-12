import * as rs from 'readline-sync';

const numero1= rs.question('Digite o primeiro numero: ');
const numero2= rs.question('Digite o segundo numero: ');
const numero3= rs.question('Digite o terceiro numero: ');

const message: string = 'O resultado da multiplicação é : ' + (numero1*numero2*numero3);

console.log(message);