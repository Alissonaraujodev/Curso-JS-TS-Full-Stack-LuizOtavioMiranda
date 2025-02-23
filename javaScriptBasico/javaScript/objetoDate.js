//const data = new Date(0); 01/01/1970 timestamp unix ou epoca unix (marco zero)
//const data = new Date(); //função construtora começa com new e a primeira letrs da função maiuscula
//const data = new Date(2019, 4, 31); // ano, mes(começa em zero)(0 a 11), dia(31), hora(24), minuto(59), segundo(59), milessimo de segundo(999) 
/*
const data = new Date('2020-04-20 20:20:59'); //Formato de string, nesse caso o mês começa em 1(mês 1 a 12)
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - domingo - 6 - sabádo
console.log(Date.now()) //data em milessimos de segundos apartir do marco zero
console.log(Date.now()) //data em milessimos de segundos apartir do marco zero
console.log(data.toString());
*/

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}` 
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

