<template>
  <div class="row">
<div>
  <div>
      <p v-if="!currentUser">Please login to continue</p>
      <p v-else>Logged in as <br> {{ currentUser }}</p>
    </div>
    <form>
      <div v-if="!currentUser">
        <div class="form-group row">
        <label class="col-sm-3">Correo</label>
          <input type="email" class="form-control" id="email" placeholder="alegreiff@gmail.com">
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Password</label>
          <input type="password" class="form-control" id="password" placeholder="enter pass">
      </div>
      <button type="button" class="btn btn-primary" @click.prevent="signIn">Entrar</button>
      </div>

      <button v-if="currentUser" type="button" class="btn btn-danger" @click.prevent="signOut">Salir</button>
    </form>

  </div>
</div>
</template>

<script>
import Firebase from 'firebase'
import { store } from '../store/store.js'
Firebase.auth().onAuthStateChanged(function(user){
  if(user){
    store.dispatch('setUser', user)
  }else{
    store.dispatch('setUser', null)
  }
});
export default {
methods: {
  signIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    Firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode === 'auth/wrong-password'){
        alert('Mal la clave llave')
      }else{
        alert(errorMessage)
      }
    })
  },
  signOut(){
    Firebase.auth().signOut()
    .then(function() {
      //alert('Logged out')
    })
    .catch(function(error){
      alert('Problemas')
    })
  },

},
computed: {
  currentUser() {
    return this.$store.getters.currentUser;
  }
}
}
</script>

<style>
form{
  margin: 20px 0;
}
</style>
