<script setup lang="ts">
import BarChart from "./components/BarChart.vue";
import DoughnutChart from "./components/DoughnutChart.vue";
</script>

<template>
  <div class="container">
    <div>
      <BarChart />
    </div>
    <div>
      <DoughnutChart />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
