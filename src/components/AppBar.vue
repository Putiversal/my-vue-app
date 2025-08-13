<template>
  <v-app-bar :elevation="3">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>My precious pet project</v-app-bar-title>

    <template v-slot:append>
      <AzazHeart />
      <ThemeChange />
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import AzazHeart from "./AzazHeart.vue";
import ThemeChange from "./ThemeChange.vue";
</script>
