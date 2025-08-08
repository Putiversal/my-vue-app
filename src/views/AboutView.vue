<template>
  <v-container>
    <div class="about">
      <h1>This is an about page</h1>
    </div>

    <v-row>
      <v-col elevation="3">
        <v-card>
          <v-card-text>
            <p :class="isRed">This text is red when counter is 2</p>
          </v-card-text>

          <v-card-text>
            <v-row>
              <v-col>
                <v-btn @click="incrementCounter"
                  >Clicked {{ counter }} times</v-btn
                >
              </v-col>
              <v-col>
                <v-btn @click="resetCounter">Reset counter</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col elevation="3">
        <v-card>
          <v-card-text><WeatherComp /></v-card-text>

          <v-card-actions>
            <v-btn color="primary">Круто!</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import WeatherComp from "@/components/WeatherComp.vue";
import { ref, watch } from "vue";

const counter = ref(0);
const isRed = ref("");
const weatherData = ref({
  current_weather: { temperature: "Загрузка...", windspeed: "Загрузка..." },
});

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

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current_weather=true&timezone=Europe/Moscow"
)
  .then((r) => r.json())
  .then((data) => {
    weatherData.value = data;
    console.log("weatherData:", weatherData);
  });
</script>

<style lang="scss" scoped>
.red-colored-text {
  color: red;
}
</style>
