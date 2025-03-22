// Arrays

const numeros = [, 2, 3, 4, 5, 6, 7, 8, 9];

const [numeroUm = 1] = numeros; // vai pegar o valor do índice 0. 
const [ ,numeroDois, ...resto] = numeros; // vai pegar o valor do índice 1.
console.log(numeroUm, numeroDois, resto);


/*
Na desestruturação você extrai os valores de um array e os atribui em variaveis individuais, ao inves de acessar os valores pelo índice, você os desenpacota, tornando mais facil o acesso.
Caso o indice ecolhido esteja vazio você pode atribuir um valo padrão a ele, se não retornará undefined.
... rest,  pega o resto do array**
1 - você tem um array com varios valores;
2 - voce cria variaveis que correspondem as posições dos valores no array;
3-  automaticamente os valores dos índices são atribuidos as variaveis correspondentes.
*/

// Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const { nome: teste } = pessoa; aqui você pode dar um novo nome de variavel para a chave nome.
const { nome } = pessoa;
const {endereco: {rua, numero}} = pessoa;
console.log(nome, rua, numero);

/*
Na desestruturação você extrai os valores de um objeto e os atribui em variaveis individuais, ao inves de acessar os valores pela chave, você os desenpacota, tornando mais fácil o acesso.
Caso a chave ecolhida esteja vazia você pode atribuir um valor padrão a ela, se não retornará undefined.
... rest,  pega o resto do objeto**
1 - você tem um objeto com varias chaves;
2 - voce cria variaveis que correspondem chaves do objeto;
3-  automaticamente os valores das chaves são atribuidos as variaveis correspondentes.
*/