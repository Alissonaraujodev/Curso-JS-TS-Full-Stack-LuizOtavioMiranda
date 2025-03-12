
/*
try{
    console.log(naoExisto);
}catch(err){
    console.log('naoExisto não existe.');
}
    */

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números');
    }
    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}catch(erro){
    console.log(erro);
    console.log('Alguma coisa mais amigável pro usuário.')
}

// throw - usado para parar a execuçaõ e abrir um exceção. pode ser algo que descreva o erro.
// try - recebe o código que tem potencial de acontecer um erro. É executado quando nã a erro.
// catch - caso o código dentro de try ocorra erro a execução do código é transferida para esse bloco.
// (erro) - recebe o valor da exceção lançada (throw).