function myScope() {

    const divButton = document.querySelector('.div-button');
    const widthInput = document.querySelector('#width-input');
    const textAqui = document.querySelector('.textAqui')

    divButton.addEventListener('click', (e) => {
        const el = e.target;
        if(el.classList.contains('btn-valid'))
            getConteudo()
        if(el.classList.contains('btn-reset'))
            ResetConteudo()
    })

    widthInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter')
            getConteudo();
    })

    getConteudo = () => {
        const validar = new ValidarCpf(widthInput.value);
        appendText(validar.checagemFinal());
        if(validar.checagemFinal() === 'CPF válido') {
            textAqui.classList.remove('p-cpfInvalido')
            textAqui.classList.add('p-cpfValido');
        }
        if(validar.checagemFinal() === 'CPF inválido'){
            textAqui.classList.remove('p-cpfValido')
            textAqui.classList.add('p-cpfInvalido');
        }
    }

    ResetConteudo = () => {
        widthInput.value = '';
        textAqui.innerHTML = '';
    };

    appendText = (texto) => {
            textAqui.innerHTML = texto;
    }


    //class
    class ValidarCpf {

        constructor(cpf) {
            this.cpf = cpf;
        }

        
        limpaCpf() {
            let cpfLimpo = this.cpf.replace(/[^a-zA-Z0-9]/g, '');
                return cpfLimpo
        }

        verificarEntrada() {
            let cpf = this.limpaCpf();
            if(cpf.length != 11) return ''
            cpf.replace(/\D/g, '');
            if(cpf[0].repeat(11) === cpf) return ''
                return cpf
        }

        cadaNumberEmArray() {
            const array = new Array()
            const cpf = this.verificarEntrada();
            for(let el of cpf) {
                array.push(Number(el))
            }
            return array
        }

        retornaDoisUltimosNumber() {
            const doisUltimosDigitos = new Array();
            let contador;
            for(let i = 0; i < 2; i++) {
                i == 0 ? contador = 10 : contador = 11
                const numeroSomado = this.cadaNumberEmArray().reduce((acumulador, valor) => {
                    if(contador < 2) return acumulador
                    valor *= contador
                    acumulador += valor;
                    contador--;            
                    return (acumulador)
                },0);
                doisUltimosDigitos.push(11 - (numeroSomado % 11))
            }

            return doisUltimosDigitos
        }

        geraArrayComparar() {
            const arreyComparar = [...this.cadaNumberEmArray()];
            arreyComparar.splice(-2, 2);
            const arrayJunta = [...arreyComparar,...this.retornaDoisUltimosNumber()]

            return arrayJunta
        }

        checagemFinal() {
            for(let i = 0; i < 11; i++) {
                if(this.cadaNumberEmArray()[i] !== this.geraArrayComparar()[i]) return 'CPF inválido'
            }
            return 'CPF válido'
        }
    }
}
myScope()