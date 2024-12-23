const numero = Number(prompt("Digite um número:"));
document.body.innerHTML += `<h1>Seu número é: ${numero}</h1>`
document.body.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`
document.body.innerHTML += `<p>${numero} é inteiro: ${(Number.isInteger(numero))}</p>`
document.body.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}<br />`
document.body.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`
document.body.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)} </p>`
document.body.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`