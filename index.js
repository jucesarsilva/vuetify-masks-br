import { is } from './node_modules/vue-convenia-util/src/validators'
import { replace } from './node_modules/vue-convenia-util/src/helpers'
import Util from 'vue-convenia-util'

/*################# custom formatters ####################*/
const toCNPJ = (cnpj) => {
    const isValid = is(cnpj, 'String')
    const formatted = !isValid ? null : replace(cnpj, [
      [/\D/g, ''],
      [/(\d{2})(\d)/, '$1.$2'],
      [/(\d{3})(\d)/, '$1.$2'],
      [/(\d{3})(\d)/, '$1$2'],
      [/(\d{4})(\d{1,2})$/, '/$1-$2']
    ])
    return formatted
}

const toCPFCNPJ = (cpfcnpj) => {
    const isValid = is(cpfcnpj, 'String')
    
    const cnpj = [
        [/\D/g, ''],
        [/(\d{2})(\d)/, '$1.$2'],
        [/(\d{3})(\d)/, '$1.$2'],
        [/(\d{3})(\d)/, '$1$2'],
        [/(\d{4})(\d{1,2})$/, '/$1-$2']
    ]

    const cpf = [
        [/\D/g, ''],
        [/(\d{3})(\d)/, '$1.$2'],
        [/(\d{3})(\d)/, '$1.$2'],
        [/(\d{3})(\d{1,2})$/, '$1-$2']
    ]

    const formatted = !isValid ? null : replace(cpfcnpj, cpfcnpj.length > 14 ? cnpj : cpf)

    return formatted
}

const toCEP = (value) => {
    const isValid = is(value, 'String')
    const formatted = !isValid ? null : replace(value, [
      [/\D/g, ''],
      [/(\d{2})(\d)/, '$1.$2'],
      [/(\d{3})(\d{1,3})/, '$1-$2']
    ])
    return formatted
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
    update (el, binding, vnode) {
        const levels = binding.expression.split('.')
        if (levels.length === 1) {
            vnode.context[levels[0]] = Util.format.toRG(vnode.context[levels[0]])
        } else {
			levels.reduce((obj, key) => {
				if (key === levels[levels.length - 1]) obj[key] = Util.format.toRG(obj[key])
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
            vnode.context[levels[0]] = Util.format.toPhone(vnode.context[levels[0]])
        } else {
			levels.reduce((obj, key) => {
				if (key === levels[levels.length - 1]) obj[key] = Util.format.toPhone(obj[key])
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
            vnode.context[levels[0]] = Util.format.toCPF(vnode.context[levels[0]])
        } else {
			levels.reduce((obj, key) => {
				if (key === levels[levels.length - 1]) obj[key] = Util.format.toCPF(obj[key])
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
            vnode.context[levels[0]] = toCNPJ(vnode.context[levels[0]])
        } else {
			levels.reduce((obj, key) => {
				if (key === levels[levels.length - 1]) obj[key] = toCNPJ(obj[key])
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
        if (levels.length === 1) {
            vnode.context[levels[0]] = toCPFCNPJ(vnode.context[levels[0]])
        } else {
			levels.reduce((obj, key) => {
				if (key === levels[levels.length - 1]) obj[key] = toCPFCNPJ(obj[key])
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
            vnode.context[levels[0]] = toCEP(vnode.context[levels[0]])
        } else {
			levels.reduce((obj, key) => {
				if (key === levels[levels.length - 1]) obj[key] = toCEP(obj[key])
				return obj[key]
			}, vnode.context)
        }
    }
}

export { trim, rg, phone, cpf, cnpj, cnpjcpf, cep }