function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') {
            reject('Cai no erro!');
            return;
        }    
        
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);
    }); 
}

const promises = [
    'Primeiro valor',
    esperaAi('promise 1', 1000),
    esperaAi('promise 2', 1000),
    esperaAi(1000, 1000),
    'Valor final'
];

Promise.race(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    });

/*
Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro);
    });
*/