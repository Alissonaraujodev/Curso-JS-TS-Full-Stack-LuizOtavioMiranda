const numeros = [5 , 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor=> valor > 10);

//console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 }
];

const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasComMais50Anos = pessoas.filter(obj => obj.idade > 50);
const pessoasNomeTerminaA = pessoas.filter(obj => obj.nome.at(-1) == 'a');
//const pessoasNomeTerminaA = pessoas.filter(obj => obj.nome.endsWith('a'));

//console.log(pessoaComNomeGrande);
//console.log(pessoasComMais50Anos);
console. log(pessoasNomeTerminaA);