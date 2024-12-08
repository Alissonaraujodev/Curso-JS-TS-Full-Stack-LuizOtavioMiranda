/*
    let umaString = "Uma \"string\"" 
    //a contra barra serve como escape de strings, nesse caso as aspas duplas.
*/

//               0123456789
let umaString = "O rato roeu a roupa do rei de roma." 

//console.log(umaString[4]);  //[i]para consultar um indice especifico.
//console.log(umaString.charAt(5));  //charAt(i) para consultar um indice especifico.
//console.log(umaString.indexOf("string")); // indexOf(***) para consultar o indice de algum elemento 
//console.log(umaString.indexOf("g", 3)); // indexOf(***, i) para consultar o indice de algum elemento partindo de um determinado indice 
//console.log(umaString.lastIndexOfindexOf("string")); // lastIndexof(***) faz a consulta começando pelo ultimo indice
//console.log(umaString.match(/[a-z]/g)); //match(/[a-z]/g) expressão regular para buscar elementos especificados na expressão regular.
//console.log(umaString.search(/[a-z]/)); // busca o indice do primeiro elemento especificado na expressão regular
//console.log(umaString.replace("Uma string", "Um texto")); // replace(**a, **b) para fazer a troca de elementos especificos 
//console.log(umaString.replace(/r/g, "#")); // replace(/*/g, "*") para fazer a troca de elementos especificos
//console.log(umaString.length) //length para saber a quantidade de elementos(não o indice) em uma variável 
//console.log(umaString.slice(2, 6)); //slice(i, i) para saber quais elementos estão entre os indices indicados, podem ser usados com números negativos para fazer uma pesquisa começando pelo ultimo elemento
//console.log(umaString.substring(umaString.length -5)) // para buscar os elementos dos ultimos indices de acordo com o número solicitado
//console.log(umaString.split(" ")); // para fazer uma divisão por indice de acordo com o elemento 
//console.log(umaString.toUpperCase()); // tudo em maiúsculo 
//console.log(umaString.toLowerCase()); // tudo em minúsculo