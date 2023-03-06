<template>
  <HsLayout />
</template>

<script>
import { reactive, toRefs } from 'vue';
import HsLayout from '../layout/index.vue';
import { useStoryblok } from '@storyblok/vue';
export default {
  components: { HsLayout },
  name: 'HsHome',
  setup() {
    const state = reactive({
      story: {}
    });
    const { story } = toRefs(state);
    (async () => await useStoryblok('home'))().then(res => (story.value = res));
  }
};
</script>
