/*
    Operadores lógicos
    && - AND - E (Todas as expressões presisam ser verdadeiras para retornar true)
    || - OR - OU (Apenas uma expressão precisa ser verdadeira para retornar true)
    ! - NOT - NÃO (Nega o valor, inverte o valor)
    ?? - Nullish Coalescing - Coalescência nula(Retorna o operando da direita se o da esquerda for null ou undefined, caso contrário, ele retorna o seu operando do lado esquerdo.)
    
    Operadores Lógicos com Atribuição
    &&=, ||=, ??= (são usados para combinar lógica com atribuição).
*/

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false 

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!false) // true
console.log(!true) // false
//Dois sinais de negação retorna o valor para o valor original 
console.log(!!true) // true
console.log(!!false) // false

let user;
console.log(user ?? "Guest"); // "Guest"
user = "Alisson";
console.log(user ?? "Guest"); // "Alisson"

let x = true;
x &&= false; // x = x && false
console.log(x); // false

let y = false;
y ||= true; // y = y || true
console.log(y); // true

let z;
z ??= "Default"; // z = z ?? "Default"
console.log(z); // "Default"