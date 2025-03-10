function fizzBuzz (numero){
    if(typeof numero !== 'number') return typeof numero;
    if(numero % 3 === 0 && numero % 5 ===0) return 'FizzBuzz';
    if(numero % 5 === 0) return 'Buzz';
    if(numero % 3 === 0) return 'Fizz'; 
    return numero; 
}

console.log(fizzBuzz('a'))
console.log(fizzBuzz(NaN))
for(i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}