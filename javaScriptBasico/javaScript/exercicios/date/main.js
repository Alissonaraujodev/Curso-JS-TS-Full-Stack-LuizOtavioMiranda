let dataCompleta = document.querySelector('#data');

function obterDiaDaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return diasSemana[diaSemana];
}

function obterMesTexto(mes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    return meses[mes]
}

function zero(num){
    return num >= 10 ? num : `0${num}`;
}

function atualizarHora(){
    const data = new Date();
    const diaSemana = data.getDay();
    const dia = zero(data.getDate());
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zero(data.getHours());
    const minutos = zero(data.getMinutes());
    const segundos = zero(data.getSeconds());

    const diaSemanaTexto = obterDiaDaSemanaTexto(diaSemana);
    const mesTexto = obterMesTexto(mes);

   dataCompleta.innerHTML =  `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}</br>${hora}:${minutos}:${segundos}`;
} 

setInterval(atualizarHora, 1000);
atualizarHora();