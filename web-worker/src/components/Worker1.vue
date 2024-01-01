<template>
  <input type="number" v-model="term" min="1" />
  <button @click="onClick">Click me</button>

  <h1>
    {{ fibonnaciValue }}
  </h1>
</template>
<script setup lang="ts">
import { ref } from "vue";
// import Worker from "../worker?worker";
// const _worker = new Worker();

const _worker = new Worker(new URL("../worker.ts", import.meta.url));

let term = ref<number>();
let fibonnaciValue = ref<number>();

// WORKER onmessage
_worker.onmessage = (event) => {
  fibonnaciValue.value = event.data;
};

function onClick() {
  if (term.value) {
    // WORKER postMessage
    _worker.postMessage(term.value);
  }
}
</script>
