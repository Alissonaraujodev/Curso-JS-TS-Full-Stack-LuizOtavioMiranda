const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros){
    
    if(numero === 2){
        console.log('pulei o número 2');
        continue;
    }
    
    console.log(numero);
    
    if(numero === 7){
        console.log('número 7 encontrado, saindo...');
        break;
    }
    
}


// break : sai completamente do loop ou switch quando alguma condição imposta é alcansada
// continue : pula uma interração de acordo com uma condição imposta e depois segue para proxima interração
// Essas instruções servem para fornecer flexibilidade no controle de fluxo de execução 