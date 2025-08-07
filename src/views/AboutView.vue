<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="incrementCounter">Simple counter: {{ counter }}</button>
  <button @click="resetCounter">Reset counter</button>
  <p :class="isRed">This text is red when counter is 2</p>
  <br />
</template>

<script setup>
import { ref, watch } from "vue";

const counter = ref(0);

const isRed = ref("");

const incrementCounter = () => {
  counter.value++;
};

const resetCounter = () => {
  counter.value = 0;
};

watch(counter, (newValue) => {
  if (newValue == 2) {
    isRed.value = "red-colored-text";
  } else {
    isRed.value = "";
  }
});
</script>

<style lang="scss" scoped>
.red-colored-text {
  color: red;
}
</style>
