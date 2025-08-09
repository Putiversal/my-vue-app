<template>
  <div class="game-view">
    <h1>Snake Game</h1>
    <SnakeGame />
  </div>
</template>

<script setup>
import SnakeGame from "@/components/SnakeGame.vue";
</script>

<style scoped>
.game-view {
  padding: 20px;
  text-align: center;
}
</style>
