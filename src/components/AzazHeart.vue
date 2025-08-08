<template>
  <v-btn @click="azazSuccess" icon>
    <v-icon :class="azaz">mdi-heart</v-icon>
  </v-btn>
</template>

<script setup>
import { ref } from "vue";

const azaz = ref("");
const azazSuccess = () => {
  azaz.value == "successColor"
    ? (azaz.value = "")
    : (azaz.value = "successColor");
};
</script>

<style lang="scss" scoped>
.successColor {
  color: red;
}
</style>
