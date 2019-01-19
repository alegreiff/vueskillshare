<template>
<div class="">
  <p>Más información</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
        <router-link :to="{ name: 'historyLink'}" tag="li"><a  class="nav-link">historia</a></router-link>
        <router-link :to="{ name: 'contactLink'}" tag="li"><a  class="nav-link">contacto</a></router-link>
        <router-link :to="{ name: 'orderingGuideLink'}" tag="li"><a  class="nav-link">cómo ordenar</a></router-link>
        <router-link :to="{ name: 'deliveryLink'}" tag="li"><a  class="nav-link">domicilios</a></router-link>
    </ul>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
