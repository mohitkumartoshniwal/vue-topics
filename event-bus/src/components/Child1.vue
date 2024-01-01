<template>
  <h1>{{ testData }}</h1>
</template>
<script setup lang="ts">
import EventBus from "@/EventBus";
import { ref } from "vue";

const testData = ref("TEST DATA");

// EventBus.on("EVENT", (data) => {
//   testData.value = data as string;
// });

EventBus.on((data) => {
  testData.value = data as string;
});
</script>
