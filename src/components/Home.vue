<template>
<div class="row">
  <div id="home" class="col-sm-12 text-center">
    <div class="background">
      <h1>Bienvenidos a la pizza</h1>
      <h2>Hambre...</h2>
      <button class="btn btn-success" @click="goToMenu">Hagamos un pedido</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    goToMenu(){
      this.$router.push({name: 'menuLink'})
    }
  }
}
</script>

<style lang="css">
</style>
