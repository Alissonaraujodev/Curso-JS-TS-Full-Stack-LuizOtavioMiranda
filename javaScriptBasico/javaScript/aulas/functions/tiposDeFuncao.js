// First-class-object(objetos de primeira classe)
//função declarada
// function hoisting, declarações de função são completamente movidas para o topo do escopo, permitindo que você as chame antes de serem definidas.

falaOi(); // chamada da função
function falaOi(){ // declaração da função
    console.log('OI');
}

 
// Function expression, quando a função é declarada como parte de uma expressão, normalmente atribuida a uma variável, e é tratada como dado. (pode ser parâmetro de outra função)


const souUmDado = function(){ //função anonima
    console.log('sou um dado');
};
souUmDado();

// Arrow function
// Uma forma mais crta de declrar funções.
const funcaoArrow = () => console.log('Sou uma arrow function.');
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando.');
    }
}

obj.falar();
