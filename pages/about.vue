<template>
  <div >class="flex flex-col gap-8">
    <h1>about</h1>
    <div>
      {{data.fact}}
    </div>
    <button @click="toggleFacts">ChangeFacts</button>
    <br />
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok('home', { version: 'draft' })
const url = ref('fact')
const wholeUrl = computed(() => `https://catfact.ninja/${url.value}`)

const toggleFacts = () => {
  if (url.value === 'fact') {
    url.value = 'facts'
  } else {
    url.value = 'fact'
  }
}

const {data, fetch} = useFetch(()=>wholeUrl.value)
</script>

