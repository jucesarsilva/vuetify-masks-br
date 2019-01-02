<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-center column fill-height>
        <v-card>
          <v-form v-model="valid">
            <!-- cnpjcpf -->
            <v-text-field
              label="CNPJ/CPF"
              :rules="documentRules"
              v-model="document"
              v-cnpjcpf:model="document">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                cnpj/cpf: {{document}}
              </code>
            </v-layout>
            <!-- cpf -->
            <v-text-field
              label="CPF"
              v-model="profile.documents.cpf"
              v-cpf:model="profile.documents.cpf">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                cpf: {{profile.documents.cpf}}
              </code>
            </v-layout>
            <!-- cnpj -->
            <v-text-field
              label="CNPJ"
              v-model="profile.documents.cnpj"
              v-cnpj:model="profile.documents.cnpj">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                cnpj: {{profile.documents.cnpj}}
              </code>
            </v-layout>
            <!-- rg -->
            <v-text-field
              label="RG"
              v-model="profile.documents.rg"
              v-rg:model="profile.documents.rg">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                rg: {{profile.documents.rg}}
              </code>
            </v-layout>
            <!-- cep -->
            <v-text-field
              label="CEP"
              v-model="profile.cep"
              v-cep:model="profile.cep">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                cep: {{profile.cep}}
              </code>
            </v-layout>
            <!-- phone -->
            <v-text-field
              label="Phone"
              v-model="profile.phone"
              v-phone:model="profile.phone">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                phone: {{profile.phone}}
              </code>
            </v-layout>
            <!-- trim -->
            <v-text-field
              label="trim"
              v-model="profile.trim"
              v-trim:model="profile.trim">
            </v-text-field>
            <v-layout class="snippet">
              <code>
                trim: {{profile.trim}}
              </code>
            </v-layout>
          </v-form>
        </v-card>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  import { isCPF, isCNPJ } from '../'

  export default {
    name: 'App',
    data () {
      return {
        valid: true,
        document: '',
        profile: {
          trim: '',
          cep: '',
          phone: '',
          documents: {
            cpf: '',
            cnpj: '',
            rg: ''
          }
        },
        documentRules: [
          v => !!v || "CPF/CNPJ é um campo obrigatório.",
          v => isCPF(v) || isCNPJ(v) || 'CPF/CNPJ não é válido.'
        ]
      }
    }
  }
</script>

<style>
  
  .card {
    padding: 20px;
    width: 40%;
  }

  code {
    width: 100%
  }

  .snippet {
    margin-bottom: 20px;
  }
</style>
