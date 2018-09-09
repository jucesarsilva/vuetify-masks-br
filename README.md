# vuetify-masks-br
The vuetify-mask-br was born to format v-text-field into several br masks. But you can use it in any another component, the directives changes v-model by manipulate vnode.context. If want use this approach, fell free to apply in custom directives.

## install
```sh
npm install vuetify-masks-br --save
```

## algoritm to manipulate model value from directive
```js
/**
 * Directive manipulate v-model (must be an object)
 */
export const {
    update (el, binding, vnode) {
        //split v-model expression to get object levels
        const levels = binding.expression.split('.')

        //if v-model have one level
        if (levels.length === 1) {
            vnode.context[levels[0]] = vnode.context[levels[0]] //apply change in v-model here
        }
        //get level of v-model object 
        else {
            levels.reduce((obj, key) => {
                //apply change in v-model here
                if (key === levels[levels.length - 1]) obj[key] = obj[key]
                return obj[key]
            }, vnode.context)
        }
    }
}
```

You will need [Node.js](https://nodejs.org/) to run.

You will need [Vuetify](https://vuetifyjs.com) to run.

```sh
$ yarn global add @vue/cli
// OR
$ npm install @vue/cli -g
```

## how to use
```js
// main.js
import { trim, cnpjcpf, cnpj, cpf, rg, phone, cep } from 'vuetify-masks-br'

Vue.directive('rg', rg)
Vue.directive('cpf', cpf)
Vue.directive('cep', cep)
Vue.directive('trim', trim)
Vue.directive('cnpj', cnpj)
Vue.directive('phone', phone)
Vue.directive('cnpjcpf', cnpjcpf)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

```vue
<!-- App.vue -->
<template>
    <v-text-field
        label="CNPJ/CPF"
        :rules="documentRules"
        v-model="profile.document"
        v-cnpjcpf:model="profile.document">
    </v-text-field>
</template>

<script>
    import { isCPF, isCNPJ } from 'vuetify-masks-br'

    export default {
        data () {
            return {
                profile.document: '',
                documentRules: [
                    v => !!v || "CPF/CNPJ é um campo obrigatório.",
                    v => isCPF(v) || isCNPJ(v) || 'CPF/CNPJ não é válido.'
                ]
            }
        }
    }
</script>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Unit Tests
```
npm run test
```
