<template>
  <v-app-bar :elevation="3" color="white">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>My precious pet project</v-app-bar-title>

    <template v-slot:append>
      <AzazHeart />
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import AzazHeart from "./AzazHeart.vue";
</script>
