<template>
  <v-app>
    <v-content>
      <v-layout align-center justify-center column fill-height>
        <v-form v-model="valid">
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required>
          </v-text-field>
          <v-text-field
            v-model="profile.email"
            v-trim:model="profile.email"
            label="E-mail"
            required>
          </v-text-field>
        </v-form>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        valid: true,
        name: '',
        profile: {
          email: ''
        }
      }
    }
  }
</script>
