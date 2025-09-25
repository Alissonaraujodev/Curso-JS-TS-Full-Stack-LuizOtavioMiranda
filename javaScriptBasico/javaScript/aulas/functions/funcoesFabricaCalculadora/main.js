function criarCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.precionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        precionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        ralizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e){
                alert('conta inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
     
        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();

