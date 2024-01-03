<template>
  <h1>{{ t("heading") }}</h1>
  <div>{{ t("content") }}</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
