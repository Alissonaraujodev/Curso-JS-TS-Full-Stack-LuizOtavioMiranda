function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject('valor deve ser uma string');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    }); 
}

esperaAi('frase 1', rand(1, 4))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('frase 2', rand(1, 4));
    })
    .then(reposta => {
        console.log(reposta);
        return esperaAi(123, rand(1, 4));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('fim');
    })
    .catch(e => {
        console.log('error 404', e);
    });

console.log('Isso aqui será exibido antes que qualquer promisse');