//get - Uma função que roda quando você lê o valor.
//set - Uma função que roda quando você atribui um valor.

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra ou não mostra a chave 
        configurable: true, // configurável ou não configurável
        get () {
            return `A quantidade em estoque é ${estoque} peças`;
        },
        set(valor){
            if(typeof valor !== 'number' || valor < 0){
                throw new TypeError("O valor do estoque de ser um nùmero positivo")
            }else{
                estoque = valor;
            }
        }

    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 5
console.log(p1.estoque);