<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
}
</script>

<template>
  <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
</template>
