<template>
  <v-app>
    <v-app-bar :elevation="3" color="white">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <template v-slot:append>
        <AzazHeart />
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer expand-on-hover permanent rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg/250px-2._Mestre_%28Italy%29%2C_the_dog_MILO.jpg"
          subtitle="danielfink2001@mail.ru"
          title="Fink Daniel"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" to="/" title="Home"></v-list-item>
        <v-list-item
          prepend-icon="mdi-file-document"
          to="/about"
          title="Testing ground RN"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-check"
          to="/taskManager"
          title="Task Manager"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AzazHeart from "./components/AzazHeart.vue";
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
