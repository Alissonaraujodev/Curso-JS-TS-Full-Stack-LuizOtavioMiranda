
let p = document.querySelector('#timer');
let botaoIniciar = document.querySelector('#iniciar');
let timer;
let intervalId;


function zero(num){
    return num >= 10 ? num : `0${num}`;
}

function mostraTimerZerado(){
    timer = new Date('01-01-1979 00:00:00:00');
    atualizaTimer();
    
}

function atualizaTimer(){
    let hora = zero(timer.getHours());
    let minutos = zero(timer.getMinutes());
    let segundos = zero(timer.getSeconds());
    p.innerHTML = `${hora}:${minutos}:${segundos}`;
}

function iniciar(){
    clearInterval(intervalId)
    intervalId = setInterval(function(){
        timer.setSeconds(timer.getSeconds() + 1);
        atualizaTimer();
    }, 1000)
    botaoIniciar.innerHTML = 'Continuar'
    p.style.color = 'black'
}

function pausar(){
    clearInterval(intervalId); 
    p.style.color = 'red'
}

function zerar(){
    mostraTimerZerado();
    clearInterval(intervalId); 
    botaoIniciar.innerHTML = 'Iniciar'
    p.style.color = 'black'
}

mostraTimerZerado(); 


















