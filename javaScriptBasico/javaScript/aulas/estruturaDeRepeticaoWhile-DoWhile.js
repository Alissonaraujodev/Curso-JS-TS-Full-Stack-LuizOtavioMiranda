/*let i = 0;

while(i <= 10){
    console.log('oi');
    i++;
}*/

function sorteio (min, max){
    const sor = Math.random() * (max -min) + min;
    return Math.floor(sor);
}

const min = 1;
const max = 50;
let s = sorteio(min, max);

//primeiro checa depois executa
while(s !== 10){
    s = sorteio(min, max);
    console.log(s);
}

console.log('#######');

//primeiro executa depois checa
do {
    s = sorteio(min, max);
    console.log(s);
}while(s !== 10);
