<template>
  <div class="p-4 rounded-md w-64">
    <h2 class="text-lg font-bold mb-2">
      <v-icon>mdi-weather-cloudy</v-icon> Погода в {{ city }}
    </h2>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else>
      <p>Температура: {{ weather.temperature }}°C</p>
      <p>Ветер: {{ weather.windspeed }} км/ч</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const weather = ref(null);
const loading = ref(true);
const error = ref(null);
const city = ref("Москве");

onMounted(async () => {
  const lat = 55.7558;
  const lon = 37.6173;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    weather.value = data.current_weather;
  } catch (err) {
    console.error(err);
    error.value = "Ошибка загрузки данных";
  } finally {
    loading.value = false;
  }
});
</script>
