
let cronometro = document.querySelector('#cronometro');
let botaoIniciar = document.querySelector('#iniciar');
let botaoVoltar = document.querySelector('#voltar');
let tempoInicial;
let intervalId;
botaoVoltar.disabled = true;


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
    if(botaoIniciar.innerHTML === 'Iniciar' || botaoIniciar.innerHTML === 'Retomar') {
        iniciar();
    }else if(botaoIniciar.innerHTML === 'Parar'){
        parar();
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
    botaoVoltar.disabled = false;
}

function parar(){
    clearInterval(intervalId);
    botaoIniciar.innerHTML = 'Retomar';
    botaoVoltar.innerHTML = 'Restaurar';
}

botaoVoltar.addEventListener('click', function(){
    if(botaoVoltar.innerHTML === 'Voltar'){
        voltar()
    }else if(botaoVoltar.innerHTML === 'Restaurar'){
        restaurar();
    }
})

function voltar(){
    
}

function restaurar(){
    mostraTimerZerado();
    clearInterval(intervalId);   
    botaoVoltar.innerHTML = 'Voltar';
    botaoIniciar.innerHTML = 'Iniciar';
    botaoVoltar.disabled = true;
}

mostraTimerZerado();










/*function mostraTempoPausado(){
    mostraPausar.innerHTML = 'Tempos Pausados';
    for(let tempo of temposPausados){
        mostraPausar.innerHTML += `<p>${tempo}</p>`;
    }
 }
 
function mostraTempoZerado(){
    mostraZerar.innerHTML = 'Tempos Zerados';
    for(let tempo of temposZerados){
        mostraZerar.innerHTML += `<p>${tempo}</p>`;
    }
}
    */

















