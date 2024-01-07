<template>
  <Doughnut
    v-if="loaded"
    :data="chartData"
    :options="{ maintainAspectRatio: false }"
  />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { onMounted, ref } from "vue";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

let chartData: any;
const loaded = ref(false);

onMounted(async () => {
  try {
    let response = await fetch("/data/data.json");
    chartData = await response.json();
    loaded.value = true;
  } catch (error) {
    console.error(error);
  }
});
</script>
