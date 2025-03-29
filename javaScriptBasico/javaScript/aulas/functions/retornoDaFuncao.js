function soma(a, b){
    return a + b;  // retorna o valor
}

console.log(soma(2, 5)); // mostra o que a função não retorna nada 

function criarPessoa(nome, sobrenome){
    return {nome, sobrenome}; // retorna um objeto com as chaves nome e sobrenome, como as chaves tem o mesmo nome dos parâmetros não preciça identificar chave e valor
}

const p1 = criarPessoa('Alisson', 'Araújo');

console.log(p1);

