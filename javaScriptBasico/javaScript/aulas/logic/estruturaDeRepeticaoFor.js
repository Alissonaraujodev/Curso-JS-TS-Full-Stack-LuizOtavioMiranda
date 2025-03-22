//contador simples
/* 
for (i = 50; i >= 0; i -= 5){
    console.log(`linha ${i}`);
}
*/

// percorrer um array
const frutas = ['uva', 'pêra', 'laranja', 'morango', 'maçã', 'amora'];

for(i = frutas.length - 1 ; i > 0; i--){
    console.log(`índice ${i}`,frutas[i]);
}