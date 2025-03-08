const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF' ;
    p.style.borderRadius = '50%'
    p.style.textAlign = 'center'
}

// querySelector seleciona apenas o primeiro item de acordo com a tag 
// querySelestorAll faz um agrupamento das tags selecionadas na variavel do querySelector por meio do NodeList

