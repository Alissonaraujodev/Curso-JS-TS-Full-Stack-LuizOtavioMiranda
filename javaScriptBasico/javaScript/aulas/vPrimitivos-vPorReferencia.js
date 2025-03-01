/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint**, symbol** - valor

Referência (mutável) - array, object, function - passedos por referência 
*/

/*
let a = "A"
let b = a //cópia
console.log(a, b) // a e b tem o mesmo valor pois b é uma cópia de a  

a = "outra coisa"
console.log(a, b)// b continua com o valor copiado anteriormente, já a tem o valor alterado  
*/


let a = [1, 2, 3]
let b = a // não é uma cópia, b irá apontar para o mesmo valor na memória de a, eles ficam linkados 
let c = [...a] // será feita uma cópia independente de a e b (sprash)

console.log(a, b)

a.push(4) // a alteração será feita tanto em a quanto em b 
console.log(a, b)

b.pop(); // a alteração será feita tanto em b quanto em a 
console.log(b, a)

c.pop(); // a alteração será feita apenas em c 
console.log(a, b, c)


// objetos e funções se comportam como arrays no caso de cópias e links 





