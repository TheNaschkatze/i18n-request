<script setup lang="ts">
defineProps<{blok: any}>()

</script>
<template>
  <div class="flex flex-col gap-4">
    <StoryblokComponent
      v-for="nestedBlok in blok.workexperience"
      :key="nestedBlok._uid"
      :blok="nestedBlok"
    />
  </div>
</template>
