// arguments -  todos valores que forem passados na chamada da função serão armazenados dentro de arguments, como se fosse um object, possibilitando a manipulação desses valores.

/*
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    
    console.log(total);
}

funcao(1, 2, 3, 4, 5);
*/

//se ao chamar a função nenhum argumento(valor) for passado como parâmetro, irá retornar undefined como padrão 

/*
function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);
*/

// O parâmetro pode ter um valor pré determinado, para ser usado vcaso o argumento não seja passado na chamada da função
//caso queira usar o valor pré determinado, passar undefined como argumento na chamada da função 

/*
function funcao(a = 0, b = 5){
    console.log(a + b);
}
funcao(2, undefined);
*/

// pode passar valores atraves da desestruturação de objetos e arrays
/*
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Alisson', sobrenome: 'Araújo', idade: 28};
funcao(obj);

function funcao2([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade);
}

let array =  ['Alisson',  'Araújo', 28];
funcao2(array);
*/

// rest operation ..., esse parâmetro pegara o todos argumentos restantes caso ele não seja de nenhum parãmetro, e se tornará um array 

function calculadora(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

calculadora('+', 0 , 0, 3)