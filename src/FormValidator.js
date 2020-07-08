import validator from 'validator'

class FormValidator {

    constructor(toValidate = []) {
        this.toValidate = toValidate
    }

    isValid(state) {
        let isAllValid = {}

        this.toValidate.map(toVal => {
            const campoValor = state[this.toValidate.campo.toString()];
            const args = toVal.args || [];
            const metodoValidacao = typeof toVal.metodo === 'string' ? toVal[this.toValidate.metodo] : toVal.metodo

            if (metodoValidacao(campoValor, ...args, state) !== toVal.useRule) {
                isAllValid[toVal.campo] = {
                    isInvalid: true, message: toVal.mensagemValid = false
                }
            }
        })
        return isAllValid
    }
}

export default FormValidator