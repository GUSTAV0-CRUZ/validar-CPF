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
        const validar = new ValidaCpf(widthInput.value);
        appendText(validar.validaCpf());
        if(validar.validaCpf() == 'CPF válido') {
            textAqui.classList.remove('p-cpfInvalido')
            textAqui.classList.add('p-cpfValido');
        }
        if(validar.validaCpf() === 'CPF inválido'){
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
    

    //object
    function ValidaCpf(cpf) {
        this.cpf = cpf;
    }

    // prototype
    ValidaCpf.prototype.validaCpf = function() {
        if(this.cpf.length > 14) return `CPF inválido`
        const cpfLimpo = this.cpf.replace(/[^a-zA-Z0-9]/g, '');
        if(cpfLimpo.length != 11) return `CPF inválido`
        if(cpfLimpo[0].repeat(11) == cpfLimpo) return `CPF inválido`;
        const cpfArrey = Array(cpfLimpo);
        const cadaNumber = cpfArrey[0].split("");

        function mulplicaCadaNumero(Cont1or2) {
            const numeroSeparado = []
            let contador = 0;
            if(Cont1or2 === 0)
                contador = 10;
            if(Cont1or2 === 1)
                contador = 11;
            const cpfMult = cadaNumber.reduce((acumulador ,valor) => {
                valor = Number(valor);
                valor *= contador;
                acumulador += valor;
                contador--;
                if(contador < 2)
                    contador = 0;
                numeroSeparado.push(acumulador);
                return acumulador = 0;
            },[ ], 1)
                return numeroSeparado
        }
        
        const cpfPAraComparar = [...cadaNumber]
        cpfPAraComparar.splice(9, 2)    
        
        for(let i = 0; i < 2; i++){
            const cpfMult = mulplicaCadaNumero(i).reduce((acumulador ,valor) => {
                valor = Number(valor);
                valor += acumulador;
                acumulador = valor;
                return acumulador;
            }, 0)
            const ajustaNumeros = 11 - (cpfMult % 11)
            cpfPAraComparar.push(ajustaNumeros)

        }

        let validar;
        for(let i = 0; i < 11; i++) {
            cadaNumber[i] = Number(cadaNumber[i]);
            cpfPAraComparar[i] = Number(cpfPAraComparar[i]);

            if(cpfPAraComparar[i] === cadaNumber[i]){
                validar = 'válido';
            }else{
                validar = 'inválido';
                break
            }
        }
            return `CPF ${validar}`
    };

}
myScope()