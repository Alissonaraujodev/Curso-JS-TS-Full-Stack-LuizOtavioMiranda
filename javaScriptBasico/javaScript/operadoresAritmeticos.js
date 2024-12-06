/*
    Operadores aritméticos.
    + soma e concatenação(unir dois valores).
    - subtração.
    / divisão.
    * multiplicação.
    ** potenciação.
    % resto da divisão.
*/

/*
    operador de incremento ++ (incrementa de 1 em 1)(let).
    operador de decremento -- (decrementa de 1em 1)(let).
*/

/*
    operadores de atribuição.
    += (incrementa um número escolhido).
    -= (decrementa um número escolhido).
    *= (multiplica por um número escolhido).
    Isso pode ser feito com outros operadores aritméticos.
*/

/*
    ordem de precedencia -> o que será executado primeiro.
    () -> parenteses.
    ** -> potenciação.
    * / % -> divisão e resto da divisão.
    + - -> soma e subtração.
*/

/*
 const num1 = 5;
 const num2 = 10;
 let contador1 = 10;
 let contador2 = 10;
 let contador3 = 10;
 let contador4 = 10;
 let contador5 = 10;
 let contador6 = 10;
 let contador7 = 10;
 
 const soma = num1 + num2;
 const subtração = num1 - num2;
 const divisão = num1 / num2;
 const multiplicacao = num1 * num2;
 const potenciacao = num1 ** num2;
 const restoDivisao = num1 % num2;
 
 console.log(soma);
 console.log(subtração);
 console.log(divisão);
 console.log(multiplicacao);
 console.log(potenciacao);
 console.log(restoDivisao);
 
 let preIncremento = ++contador1;
 let posIncremento = contador2++;
 let preDecremento = --contador3;
 let posDecremento = contador4--;

 console.log(preIncremento);
 console.log(posIncremento);
 console.log(preDecremento);
 console.log(posDecremento);
 
 let a = contador5 += 5;
 let b = contador6 -= 5;
 let c = contador7 *= 5;

 console.log(a);
 console.log(b);
 console.log(c);
*/

const num1 = 10; 
const num2 = parseInt("5"); // para converter um string em número inteiro para não ocorrer. concatenação.
const num3 = parseFloat("5.2"); //para converter um string em número com ponto flutuante para não.ocorrer concatenação.
const num4 = Number("5.2"); // para converter um string em número(inteiro ou com ponto flutuante).

//A conversão de string para números só funciona caso o string seja um número, caso o string seja um texto retornará NaN no caso de alguma operação.