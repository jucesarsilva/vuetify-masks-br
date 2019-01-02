import { formatToCEP, formatToCNPJ, formatToCPF, formatToPhone, formatToRG } from 'brazilian-values';

const mapToNumeric = (value) => value.replace(/\D/g, '')

/*################# custom formatters ####################*/
const formatToCPFCNPJ = (value) => {
    if (typeof value !== 'string')
        return null

    const isCNPJ = mapToNumeric(value).length > 11

    if (isCNPJ)
        return formatToCNPJ(value)
    return formatToCPF(value)
}

/*################## direcitves ####################*/
const trim = {
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = vnode.context[levels[0]].replace(/\s/g, "")
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = obj[key].replace(/\s/g, "")
                return obj[key]
            }, vnode.context)
        }        
    }
}

const rg = {
    bind(el) {
        el.getElementsByTagName('input')[0].setAttribute('maxlength', 12)
    },
    update (el, binding, vnode){
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = formatToRG(vnode.context[levels[0]], 'SP')
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = formatToRG(obj[key], 'SP')
                return obj[key]
            }, vnode.context)
        }
    }
}

const phone = {
    bind(el) {
        el.getElementsByTagName('input')[0].setAttribute('maxlength', 15)
    },
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = formatToPhone(vnode.context[levels[0]])
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = formatToPhone(obj[key])
                return obj[key]
            }, vnode.context)
        }
    }
}

const cpf =  {
    bind(el) {
        el.getElementsByTagName('input')[0].setAttribute('maxlength', 14)
    },
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = formatToCPF(vnode.context[levels[0]])
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = formatToCPF(obj[key])
                return obj[key]
            }, vnode.context)
        }
    }
}

const cnpj = {
    bind(el) {
        el.getElementsByTagName('input')[0].setAttribute('maxlength', 18)
    },
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = formatToCNPJ(vnode.context[levels[0]])
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = formatToCNPJ(obj[key])
                return obj[key]
            }, vnode.context)
        }
    }
}

const cnpjcpf = {
    bind(el) {
        el.getElementsByTagName('input')[0].setAttribute('maxlength', 18)
    },
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        console.log(levels)
        if (levels.length === 1) {
            vnode.context[levels[0]] = formatToCPFCNPJ(vnode.context[levels[0]])
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = formatToCPFCNPJ(obj[key])
                return obj[key]
            }, vnode.context)
        }
    }
}

const cep = {
    bind(el) {
        el.getElementsByTagName('input')[0].setAttribute('maxlength', 10)
    },
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = formatToCEP(vnode.context[levels[0]])
        } else {
            levels.reduce((obj, key) => {
                if (key === levels[levels.length - 1]) obj[key] = formatToCEP(obj[key])
                return obj[key]
            }, vnode.context)
        }
    }
}

export { isCNPJ, isCPF } from 'brazilian-values'

export { trim, rg, phone, cpf, cnpj, cnpjcpf, cep }