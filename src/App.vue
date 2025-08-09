<template>
  <v-app>
    <AppBar />

    <NavigationDrawer />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavigationDrawer from "./components/NavigationDrawer.vue";
import AppBar from "./components/AppBar.vue";
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
