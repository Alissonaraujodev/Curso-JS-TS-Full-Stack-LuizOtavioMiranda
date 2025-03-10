function retornaMaior(num1 = 1, num2 = 1){
    if(num1 > num2){
        console.log(`O número ${num1} é o maior.`);
    }else if(num2 > num1){
        console.log(`O número ${num2} é o maior.`);
    }else{
        console.log('Os números são iguais!');
    }
}

retornaMaior(6, 5);