/*
    Operadores de comparação (true ou false)
    > maior que
    < menor que
    >= maior ou igual a
    <= menor ou igual a 
    == igualdade (valor) ** (cuidado)
    === igualdade estrita (valor e tipo)
    != diferente (valor) ** (cuidado)
    !== diferente estrito (valor e tipo)
*/

console.log(10 > 5); // true
console.log(10 >= 5); // true
console.log(10 < 5); // false
console.log(10 <= 5); // false
console.log(10 == '10'); // true - compara apenas o valor (10 e '10')***
console.log('10' === 10); // false - compara o valor e o tipo (string e number)
console.log('10' != 10); // false - compara apenas o valor (10 e '10')***
console.log('10' !== 10); // true - compara o valor e o tipo (string e number)


