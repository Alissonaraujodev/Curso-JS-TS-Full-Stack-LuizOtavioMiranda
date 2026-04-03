function Produto(nome, preco){ // cria um prototipo para todos os produto
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){ // metodo de produto
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){ // metodo de produto
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // pega as especificações(herança) do prototipo produto
    this.cor = cor; // especificação unica desse produto
}

Camiseta.prototype = Object.create(Produto.prototype); // o protype de Camiseta é igual ao do Produto, assim pode acessar os metodos(link dos prototypes)
Camiseta.prototype.constructor = Camiseta; // a função contrutora passa a ser Camiseta e não Produto

Camiseta.prototype.aumento = function(percentual){  
    this.preco = this.preco + (this.preco * (percentual / 100));
}; // metodo para camiseta, nesse caso o JS acha primeiro esse metodo de aumento, entao para de procurar no 'pai'(Produto) de Camiseta

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

camiseta.aumento(50)

console.log(camiseta);
console.log(produto);

