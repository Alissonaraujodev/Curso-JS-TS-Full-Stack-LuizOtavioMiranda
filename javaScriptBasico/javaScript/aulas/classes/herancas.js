class DispoositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.lidago = false;
    }

    ligar(){
        if(this.ligado){
            console.log( this.nome + ' já está ligado');
            return;
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log( this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    } 
}

class Smartphone extends DispoositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispoositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy a55');

s1.ligar();
s1.ligar();
console.log(s1);