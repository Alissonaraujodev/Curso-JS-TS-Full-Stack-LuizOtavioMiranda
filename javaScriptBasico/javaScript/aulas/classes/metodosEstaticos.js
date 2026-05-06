class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        this.canal = 5;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    trocarCanal(valor){
        this.canal = valor;
    }

    static trocarPilha(){
        console.log('Pilha trocada!!!')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);
controle1.trocarCanal(4);
console.log(controle1);
ControleRemoto.trocarPilha();