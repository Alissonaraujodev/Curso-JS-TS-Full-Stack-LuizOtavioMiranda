function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperrando istância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12')
    data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratamento de erro
}finally{
    console.log('Tenha um bom dia.');
}

// finally - bloco que sempre será executado.
