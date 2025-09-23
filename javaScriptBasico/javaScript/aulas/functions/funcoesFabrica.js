// Factory function - Função fábrica

function criarPessoa (nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala(assunto){
            return `${this.nome} ${this.sobrenome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return `${this.nome} ${this.sobrenome} tem o imc de ${indice.toFixed(2)}`;
        }
    };
}

const p1 = criarPessoa('Alisson', 'Araújo Mariano', 1.73, 117);
console.log(p1.fala('estudando funções em JS'));
console.log(p1.imc);
console.log(p1.nomeCompleto);

p1.nomeCompleto = 'Aline Araújo Mariano'
console.log(p1.nome);
console.log(p1.sobrenome);

const p2 = criarPessoa('Adrielly', 'Nunes', 1.65, 80);
console.log(p2.fala('estudando Fontend'));
console.log(p2.imc);
