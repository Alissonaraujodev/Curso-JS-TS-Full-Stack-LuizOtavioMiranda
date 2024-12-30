/*  
    Avaliação de curto circuito é quando a linguagem encontra um valor que define o resultado de uma expressão sem precisar avaliar todos os operandos, começado da esquerda.
    
    && - false && true - (retorna o primeiro valor encontrado como falso)
    || - false && true - (retorna o primeiro valor encontrado como verdadeiro)

    FALSY VALUES (valores considerados falsos)
    0 - zero
    "" - '' - `` (quando estão vazios)
    null / undefined / NaN
    false (falso literal)**
    Todos os valores diferentes desses são avaliados como verdadeiro. (true)
*/

//console.log("Luiz Otávio" && 0 && "Maria"); // primeiro valor falso encontrado - 0 
//console.log("Luiz Otávio" && true && "Maria"); // quando todos são verdadeiro, retorna o ultimo valor - "Maria"

//console.log(0 || false || null || "Luiz Otávio" || true); // primeiro valor verdadeiro encontrado - "Luiz Otávio"
//console.log(0 || false || null || "" || NaN ); // quando todos são falso, retorna o ultimo valor - NaN



