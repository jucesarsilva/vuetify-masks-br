<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn color="primaty" @click="setToken()">
          Bearer
        </v-btn>
        Home retrive token guid -> {{getToken()}}
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import AuthService from '../services/AuthService'

  export default {
    name: 'Home',
    data () {
      return {
      }
    },
    methods: {
      guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      },
      getToken() {
        return AuthService.getToken()
      },
      setToken() {
        AuthService.setToken('Bearer ' + this.guid())
      }
    },
    created() {
      AuthService.retriveToken();
      console.log('created -> ', AuthService.getToken());
    },
    mounted() {
      console.log('mounted -> ', AuthService.getToken());
    },
    beforeUpdate() {
      console.log('beforeUpdate -> ', AuthService.getToken());
    },
    updated() {
      console.log('updated -> ', AuthService.getToken());
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
