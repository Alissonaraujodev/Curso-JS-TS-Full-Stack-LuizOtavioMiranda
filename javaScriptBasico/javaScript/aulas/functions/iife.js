//IIFE - Immediately invoked function expression (Expressão de função invocada imediatamente

(function(idade, peso, altura){
    const sobrenome = 'Mariano';
    function criarNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criarNome('Alisson'));
    }

    falaNome();
    console.log(`idade: ${idade} anos \npeso: ${peso} Kg \naltura: ${altura} Mts`);
})(29, 117, 1.73)
