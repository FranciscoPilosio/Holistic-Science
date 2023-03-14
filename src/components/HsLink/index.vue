<template>
  <a class="link" :href="blok.path">
    {{ blok.title }}
  </a>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  name: 'HsLink',
  setup() {}
};
</script>
<style scoped src="./style.scss" lang="scss" />
