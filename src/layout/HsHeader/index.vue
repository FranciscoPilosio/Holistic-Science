<template>
  <header class="header">
    <div class="header__nav">
      <ul class="header__nav--list">
        <HsLink
          v-for="link in data.body"
          :key="link._uid"
          class="header__nav--element"
          :blok="link"
        />
      </ul>
    </div>
  </header>
</template>
<script>
import { inject } from 'vue';
import HsLink from '@/components/HsLink';
export default {
  name: 'HsHeader',
  components: { HsLink },
  setup() {
    const data = inject('header');
    return {
      data
    };
  }
};
</script>
<style scoped src="./style.scss" lang="scss" />
