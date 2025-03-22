const nome = ['Luiz', 'Otávio', 'Henrique']

for (valor of nome){             // retorna o valor e não o índice
    console.log(valor);
}

const pessoa = {
    nome: 'Alisson',
    sobrenome: 'Araújo',
    idade: 28
};
// não da pra usar for of em objetos, pois ele não é iterravel