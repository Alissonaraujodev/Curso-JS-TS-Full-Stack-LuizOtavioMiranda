const nomes = ['Eduardo', 'Maria', 'Joana'];
//const nomes = new Array('Eduardo', 'Maria', 'Joana'); // metodo constructor

const novo = [...nomes] // rest operator, apenas cópia os dados do array
//const novo = nomes // sitaçaõ direta, o que fizer ema variavel será feita na outra

novo.pop();// remove o ultimo indice
novo.shift();// remove o primeiro indice
console.log(novo);

console.log(nomes);

nomes.push('Alisson'); // Adiciona ao final
nomes.unshift('Adrielly'); // Adiciona ao começo
console.log(nomes);

const fatia = nomes.slice(1, 3); //Pega uma fatia do array
const fatia1 = nomes.slice(0, -1); //Pega uma fatia do array, o -1 remove o ultimo indice
console.log(fatia);
console.log(fatia1);

const nome1 = 'Alisson Araújo Mariano';
const nomes1 = nome1.split(' '); //faz uma separação pelo elemento indicado, e tranforma em array
console.log(nome1);
console.log(nomes1);

const nomes2 = [ 'Adrielly', 'Nunes', 'Assunção' ]; 
const nome2 = nomes2.join(' '); //faz uma junção pelo elemento indicado, e tranforma em string
console.log(nome2)