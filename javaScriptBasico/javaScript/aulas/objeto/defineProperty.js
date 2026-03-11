//defineProperty - Ele define uma nova propriedade (ou modifica uma existente) diretamente em um objeto e retorna o objeto.
//defineProperties - É exatamente a mesma coisa, mas permite definir várias propriedades de uma vez.

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra ou não mostra a chave 
        value: estoque,  // define o valor
        writable: true,  // pode ou não alterar
        configurable: true // configurável ou não configurável
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1);

