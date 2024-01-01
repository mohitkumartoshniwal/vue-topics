<template>
  <input type="text" v-model="text" />
  <button @click="onClick">Click Me</button>
</template>
<script setup lang="ts">
import EventBus from "@/EventBus";
import { ref } from "vue";

const text = ref("");

function onClick() {
  // EventBus.emit("EVENT", text.value);
  EventBus.emit(text.value);
}
</script>
