<template >
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" class="navbar-brand">Pizza planet</a>
      <ul class="navbar-nav">
          <router-link :to="{ name: 'homeLink'}" tag="li"><a  class="nav-link">home</a></router-link>
          <router-link :to="{ name: 'menuLink'}" tag="li"><a  class="nav-link">menú</a></router-link>
      </ul>
    </nav>

  </header>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style>
header {
  margin-bottom: 20px;
}
.navbar-brand {
  font-size: 1.5em;
}
</style>
