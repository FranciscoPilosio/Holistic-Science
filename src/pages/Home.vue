<template><HsLayout /></template>

<script>
import HsLayout from "../layout/index.vue";
import { useStoryblok } from "@storyblok/vue";
export default {
  components: { HsLayout },
  name: "Home",
  setup() {
    (async () => {
      const story = await useStoryblok("home", { version: "draft" });
      console.log(story);
    })();
  },
};
</script>
