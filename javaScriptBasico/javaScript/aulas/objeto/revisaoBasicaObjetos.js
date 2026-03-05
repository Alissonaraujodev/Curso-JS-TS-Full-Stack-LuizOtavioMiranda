const pessoa = {
    nome: 'Luiz',       // objeto literal
    sobrenome: 'Otávio'
};

//const chave = 'sobrenome';
//console.log(pessoa.nome); //notação de ponto
//console.log(pessoa[chave]); //notação de colchete

const pessoa1 = new Object(); // objeto construtor
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30
pessoa1.falaOi = function() {
    return (`${this.nome} está falando OI!`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento())

