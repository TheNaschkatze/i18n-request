<script setup lang="ts">

const props = defineProps<{
  blok: any
}>()
</script>

<template>
  <div v-editable="blok">
    {{blok}}
  </div>
</template>
