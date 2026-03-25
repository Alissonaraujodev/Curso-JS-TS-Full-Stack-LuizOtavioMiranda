function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa('Alisson', 'Araújo');
const pessoa2 = new Pessoa('Adrielly', 'Nunes');


//console.log(pessoa1.nomeCompleto());
//console.log(pessoa2.nomeCompleto());
//console.log(pessoa2.nomeCompleto === pessoa1.nomeCompleto); // true

// manipulação de prototypes

const objA = {
    chaveA: 'A'
}
const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA);

function Produto(nome, preco){
    this.nome = nome,
    this.preco= preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('camiseta', 100);

const p2 = Object.create(Produto.prototype);
p2.preco = 50;
p2.desconto(10)


const animal = {
    tipo: "Mamífero",
    comer() {
        console.log("O animal está comendo...");
    }
};

const cachorro = Object.create(animal);
cachorro.raca = "Labrador";
cachorro.latir = function() {
    console.log("Au Au!");
}

// Estabelecendo a herança: cachorro herda de animal
//Object.setPrototypeOf(cachorro, animal);

console.log(cachorro.raca); // "Labrador" (dele mesmo)
console.log(cachorro.tipo); // "Mamífero" (veio do protótipo 'animal')
cachorro.comer();           // "O animal está comendo..." (veio do protótipo)
cachorro.latir();