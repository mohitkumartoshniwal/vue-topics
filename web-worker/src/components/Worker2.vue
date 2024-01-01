<!-- https://vueuse.org/core/useWebWorker/ -->

<template>
  <input type="number" v-model="term" min="1" />
  <button @click="onClick">Click me</button>

  <h1>
    {{ fibonnaciValue }}
  </h1>
</template>
<script setup lang="ts">
import { useWebWorker } from "@vueuse/core";
import { ref, watch } from "vue";

const { data, post, worker } = useWebWorker("/src/worker.ts");

let term = ref<number>();
let fibonnaciValue = ref<number>();

// WORKER onmessage
// worker.value!.onmessage = (event) => {
//   fibonnaciValue.value = event.data;
// };

watch(data, (value) => {
  fibonnaciValue.value = value;
});

function onClick() {
  if (term.value) {
    // WORKER postMessage
    // worker.value!.postMessage(term.value);
    post(term.value);
  }
}
</script>
