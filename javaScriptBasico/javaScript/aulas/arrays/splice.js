const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(-1, 1); // pop
const removidos1 = nomes.splice(0, 1); // shift
nomes.splice(nomes.length, 0, 'Luiz') // Push(length - extenção total)
nomes.splice(0, 0, 'Marcos') // unshift

console.log(nomes, removidos, removidos1);