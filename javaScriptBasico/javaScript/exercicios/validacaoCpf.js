//let cpf = '466.968.268-74';
//let cpfLimpo = cpf.replace(/\D+/g, '');
//let cpfArray = Array.from(cpfLimpo);
//let tirarDigitosCpf = cpfArray.splice(-2, 2);


function ValidarCpf(cpf){
    this.cpfLimpo = cpf.replace(/\D+/g, '');
    this.cpfArray = Array.from(this.cpfLimpo).map(Number);
    this.tirarDigitosCpf = this.cpfArray.splice(-2, 2);

    this.gerarDigito = (array, multiplicadorInicial) => {
        const soma = array
            .map((valor, index) => valor * (multiplicadorInicial - index))
            .reduce((acumulador, valor) => acumulador + valor);
        
        const resto = 11 - (soma % 11);
        return resto > 9 ? 0 : resto;
    };

    const d1 = this.gerarDigito(this.cpfArray, 10);
    this.cpfArray.push(d1);

    const d2 = this.gerarDigito(this.cpfArray, 11);
    this.cpfArray.push(d2);

    this.novoCpf = this.cpfArray.join('');
    this.valido = () => this.novoCpf === this.cpfLimpo;

}

const cpf = new ValidarCpf('070.987.720-03')
console.log(cpf.valido())

