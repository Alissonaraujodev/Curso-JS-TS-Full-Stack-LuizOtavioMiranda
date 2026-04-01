let cpf = '466.968.268';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

const primeiroDigito = cpfArray
    .map((valor, index) => valor * (10 - index))
    .reduce((acumulador, valor) => acumulador + valor) * 10 % 11;

cpfArray.push(primeiroDigito)

const segundoDigito = cpfArray
    .map((valor, index) => valor * (11 - index))
    .reduce((acumulador, valor) => acumulador + valor) * 10 % 11;

cpfArray.push(segundoDigito)

console.log(cpfArray.toString())
