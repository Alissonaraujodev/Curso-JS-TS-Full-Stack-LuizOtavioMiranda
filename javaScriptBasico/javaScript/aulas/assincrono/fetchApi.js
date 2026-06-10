documet.addEventLister('click', e => {
    const el = e.target;
    const tag = el.tagName.towLowerCase();

    if (tag === 'a'){
        e.preventDefult();
        carregaPagina(e);
    }
});

async function carregaPagina(el){ 
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !=200) throw new Error('ERRO 404!');
        const html = await response.text();
        carregarResultado(html);  
    }catch(e){
        console.log(e)
    }
    
}

function carregaResultado(response){
    const resultado =document.querySelector('.resultado');
    resultado.innerHTML = response;
}