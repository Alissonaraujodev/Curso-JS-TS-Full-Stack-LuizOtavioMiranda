const produto = {nome: 'caneca', preco: 1.8};
const produto1 = produto; // Não faz uma cópia, é o mesmo endereço na memória
const produto2 = { ...produto, quantidade: 10}; // (...spread) Faz uma cópia independente, pode colocar novas propriedades
const produto3 = Object.assign({}, produto); // Faz uma cópia independente, pode colocar novas propriedades

console.log(Object.keys(produto)); // retorna um array com as chaves do objeto
console.log(Object.values(produto)); // retorna um array os valores do objeto
console.log(Object.entries(produto)); // retorna um array as chaves e valores do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // retorna um array com as propriedades da chave de um objeto