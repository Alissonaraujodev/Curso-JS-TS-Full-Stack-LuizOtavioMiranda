const  frutas = ['perâ', 'maçã', 'uva'];
for (indice in frutas){                     // lê o índece do array
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Alisson',
    sobrenome: 'Araújo',
    idade: 28
};

for (chave in pessoa){                      //lê a chave do objeto
    console.log(pessoa[chave]);
}