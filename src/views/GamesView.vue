<template>
  <v-container nav class="game-view d-flex">
    <v-row v-if="route.name === 'games'">
      <v-card class="box-content" to="/games/snake-game"
        ><v-card-title>Змейка</v-card-title>
        <v-card-subtitle>by: Azaz</v-card-subtitle>
        <v-card-text><img src="@/assets/snakeGameScreen.png" /></v-card-text>
      </v-card>
      <v-card class="box-content"
        ><v-card-title>Игра 2</v-card-title> <v-card-text></v-card-text
      ></v-card>
      <v-card class="box-content"
        ><v-card-title>Игра 3</v-card-title> <v-card-text></v-card-text
      ></v-card>
      <v-card class="box-content"
        ><v-card-title>Игра 4</v-card-title> <v-card-text></v-card-text
      ></v-card>
    </v-row>

    <!-- Здесь будет отображаться текущая игра -->
    <router-view></router-view>
  </v-container>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
.game-view {
  padding: 20px;
  text-align: center;
}
.box-content {
  border: 1px;
  border-style: solid;
  border-color: black;
  width: 24%;
  /* height: 240px; */
  margin: 6px;
}
.game-view {
  padding: 20px;
  text-align: center;
}
</style>
