let a = "A"; //b
let b = "B"; //c
let c = "C"; //a

/*
    usei uma variável como auxilio para armazenar o valor de a e depois fazer as trocas das outras variáveis, e depois trocando o valor de c pelo da variável de auxilio
    let auxA = a
    a = b
    b = c
    c = auxA
*/
//colocacando as variáveis dentro de um par de colchetes e depois outro par de colchetes com as trocas de acordo com as ordens
[a, b, c] = [b, c, a] 

console.log(a, b, c)