<!-- https://vueuse.org/core/useWebWorkerFn/ -->

<template>
  <input type="number" v-model="term" min="1" />
  <button @click="onClick">Click me</button>

  <h1>
    {{ fibonnaciValue }}
  </h1>
</template>
<script setup lang="ts">
import { useWebWorkerFn } from "@vueuse/core/index.cjs";
import { ref } from "vue";

let term = ref<number>();
let fibonnaciValue = ref<number>();

function fibonacci(num: number): number {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

const { workerFn } = useWebWorkerFn(fibonacci);

async function onClick() {
  if (term.value) {
    fibonnaciValue.value = await workerFn(term.value);
  }
}
</script>
