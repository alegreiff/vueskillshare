<template >
  <footer class="tow">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
          <router-link :to="{ name: 'homeLink'}" tag="li"><a  class="nav-link">home</a></router-link>
          <router-link :to="{ name: 'aboutLink'}" tag="li"><a  class="nav-link">about</a></router-link>
          <router-link :to="{ name: 'adminLink'}" tag="li"><a  class="nav-link">admin</a></router-link>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      homeLink: '/',
      menuLink: '/menu'
    }
  }
}
</script>

<style lang="css">
</style>
