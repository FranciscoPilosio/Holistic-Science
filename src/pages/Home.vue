<template>
  <div class="h-40 w-40 bg-red-500"></div>
</template>

<script>
import { useStoryblok } from '@storyblok/vue';
export default {
  name: 'Home',
  setup() {
    (async ()=> {
      const story = await useStoryblok('home', { version: 'draft' })
      console.log(story);
    })()
  }
}
</script>