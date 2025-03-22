let cronometro = document.querySelector('#cronometro');
let botaoIniciar = document.querySelector('#iniciar');
let botaoVolta = document.querySelector('#volta');
let tempoGeralDeVoltas = document.querySelector('#tempoGeralDeVoltas');
let voltas = document.querySelector('#voltas');
let tempoDaVoltaAtual = document.querySelector('#tempoDaVoltaAtual')
let tempoInicial;
let intervalId;
let numeroDeVoltas = [];
let listaDasVoltas = [];
let listaTemposGerais = [];
botaoVolta.disabled = true;

function zero(num){
    return num >= 10 ? num : `0${num}`;
}

function zeroMilli(num){
    if(num < 10){
        return `00${num}`;
    }else if(num < 100){
        return `0${num}`;
    }else{
        return `${num}`;
    }
}

function mostraTimerZerado(){
    tempoInicial = new Date('01-01-1979 00:00:00');
    atualizaTimer();   
}

function atualizaTimer(){
    let minutos = zero(tempoInicial.getMinutes());
    let segundos = zero(tempoInicial.getSeconds());
    let millesegundos = zeroMilli(tempoInicial.getMilliseconds());
    cronometro.innerHTML = `${minutos}:${segundos}.${millesegundos}`;
}

botaoIniciar.addEventListener('click', function(){
    if(botaoIniciar.innerHTML === 'Iniciar') {
        iniciar();
    }else if(botaoIniciar.innerHTML === 'Parar'){
        parar();
    }else if(botaoIniciar.innerHTML === 'Retomar'){
        retomar();
    }
})

function iniciar(){
    clearInterval(intervalId)
    intervalId = setInterval(function(){
        tempoInicial.setMilliseconds(tempoInicial.getMilliseconds() + 10);
        if(tempoInicial.getMilliseconds() >= 1000){
            tempoInicial.setSeconds(tempoInicial.getSeconds() + 1);
            tempoInicial.setMilliseconds(0);
        }
        if(tempoInicial.getSeconds() >= 60){
            tempoInicial.setMinutes(tempoInicial.getMinutes() + 1);
            tempoInicial.setSeconds(0);
        }
        atualizaTimer();
    }, 10)
    botaoIniciar.innerHTML = 'Parar'
    botaoVolta.disabled = false;
}

function parar(){
    clearInterval(intervalId);
    botaoIniciar.innerHTML = 'Retomar';
    botaoVolta.innerHTML = 'Restaurar';
}

function retomar(){
    iniciar();
    botaoVolta.innerHTML = 'Volta';
}

botaoVolta.addEventListener('click', function(){
    if(botaoVolta.innerHTML === 'Volta'){
        volta()
    }else if(botaoVolta.innerHTML === 'Restaurar'){
        restaurar();
    }
})

function volta(){
    quantidadeDeVoltas();
    tempoDaVolta();
    tempoGeral();
    segundoCronometro();
}

function quantidadeDeVoltas(){
    //voltas.innerHTML = `Número de voltas<br>${listaDasVoltas.length + 1}`;
    let voltaN = cronometro.innerHTML;
    numeroDeVoltas.push(voltaN);
    voltas.innerHTML = `Volta<br>`;
    for(let i = 0; i < numeroDeVoltas.length; i++){
        const numeroDaVolta = document.createElement('div');
        numeroDaVolta.textContent = i + 1;
        voltas.appendChild(numeroDaVolta);
    }
}

function tempoDaVolta(){
    let tempoVolta = cronometro.innerHTML;
    let tempoEmMilissegundos = converteTempoParaMilissegundos(tempoVolta);
    listaDasVoltas.push(tempoEmMilissegundos);
    
    tempoDaVoltaAtual.innerHTML = `Tempo das voltas<br>${formataMilissegundos(listaDasVoltas[0])}`;
    
    if (listaDasVoltas.length === 1) {
        const primeiraVolta = document.createElement("div");
        tempoDaVoltaAtual.appendChild(primeiraVolta);
    }
    
    if(listaDasVoltas.length > 1){
        while (tempoDaVoltaAtual.children.length > 1) {
            tempoDaVoltaAtual.removeChild(tempoDaVoltaAtual.lastChild);
        }

        for(let i = 1; i < listaDasVoltas.length; i++){
            let diferenca = listaDasVoltas[i] - listaDasVoltas[i -1];
            let diferencaFormatada = formataMilissegundos(diferenca)
           
            const diferencaItem = document.createElement('div');
            diferencaItem.textContent = diferencaFormatada;
            tempoDaVoltaAtual.appendChild(diferencaItem);
        }
    } 
}

function converteTempoParaMilissegundos(tempo){
    let [minutos, segundosComMilissegundos] = tempo.split(":");
    let [segundos, milissegundos] = segundosComMilissegundos.split(".");

    return(
        parseInt(minutos) * 60000 +
        parseInt(segundos) * 1000 +
        parseInt(milissegundos)
    );
}

function formataMilissegundos(milissegundos){
    let minutos = Math.floor(milissegundos / 60000);
    let segundos = Math.floor((milissegundos % 60000) / 1000);
    let milissegundosRestante = milissegundos % 1000;

    return `${zero(minutos)}:${zero(segundos)}.${zeroMilli(milissegundosRestante)}`
}

function tempoGeral(){
    let tempoVoltaSomado = cronometro.innerHTML;
    listaTemposGerais.push(tempoVoltaSomado);
    tempoGeralDeVoltas.innerHTML = `Tempo geral<br>`;
    for(let i = 0; i < listaTemposGerais.length; i++){
        const geralItem = document.createElement('div');
        geralItem.textContent = listaTemposGerais[i];
        tempoGeralDeVoltas.appendChild(geralItem);
    }
}

function restaurar(){
    mostraTimerZerado();
    clearInterval(intervalId);   
    botaoVolta.innerHTML = 'Volta';
    botaoIniciar.innerHTML = 'Iniciar';
    botaoVolta.disabled = true;
    numeroDeVoltas = [];
    listaDasVoltas = [];
    listaTemposGerais = [];
    tempoDaVoltaAtual.innerHTML = '';
    tempoGeralDeVoltas.innerHTML = '';
    voltas.innerHTML = '';
}

mostraTimerZerado();


















