//Simplificação do else if ** (true ou false)
//  (condição) ? valor para verdadeiro : valor para falso 
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : "Usuario normal";

console.log(nivelUsuario);
/*
if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
}
*/

const corUsuario = null;
const corPadrao = corUsuario || 'Preta' // caso nenhuma cor seja escolhida

console.log(corPadrao);