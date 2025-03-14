
let p = document.querySelector('#timer')
let timer;
let intervalId;

function zero(num){
    return num >= 10 ? num : `0${num}`;
}

function mostraTimerZerado(){
    timer = new Date('01-01-1979 00:00:00');
    atualizaTimer();
}

function atualizaTimer(){
    let hora = zero(timer.getHours());
    let minutos = zero(timer.getMinutes());
    let segundos = zero(timer.getSeconds());
    p.innerHTML = `${hora}:${minutos}:${segundos}`
}

function iniciar(){
    intervalId = setInterval(function(){
        timer.setSeconds(timer.getSeconds() + 1)
        atualizaTimer();
    }, 1000)
}

function pausar(){
    clearInterval(intervalId);   
}

function reiniciar(){
    mostraTimerZerado();
    clearInterval(intervalId); 
}
mostraTimerZerado();


















