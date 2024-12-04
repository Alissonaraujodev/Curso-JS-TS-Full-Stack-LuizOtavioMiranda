const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura ** 2);
let anoDeNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg. \nTem ${altura} de altura e seu IMC é de ${imc}. \n${nome} nasceu em ${anoDeNascimento}.`) // template string, colocar variáveis dentro da string, a string deve estar dentro de crases `` e a variavel dentro de ${}, essa forma deixa o código mais legível, e mais orático de ser escrito. 