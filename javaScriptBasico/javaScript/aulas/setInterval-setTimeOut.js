// setInterval - retorna uma função em um determinado periodo de tempo, ele usa a funçao como referência.

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer)
}, 5000); 

// setTimeout - clearInterval - cria uma função que para a execução de outra função em um periodo estabelecido. Pode executar um bloco de código com um periodo de tempo determinado
