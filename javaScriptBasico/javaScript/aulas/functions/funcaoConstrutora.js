// Função contrutora - objetos

function Pessoa(nome, sobrenome){
    const ID = 123456;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    };
}

const p1 = new Pessoa('Alisson', 'Araújo');
const p2 = new Pessoa('Adrielly', 'Nunes');
console.log(p1.nome);
p1.metodo();