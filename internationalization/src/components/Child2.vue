<template>
  <select v-model="$i18n.locale">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="locale"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
  <h1>{{ $t("heading") }}</h1>
  <div>{{ $t("content") }}</div>
</template>

<script setup lang="ts"></script>
