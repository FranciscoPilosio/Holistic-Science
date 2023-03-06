<template>
  <header class="header">
    <div class="header__nav">
      <ul class="header__nav--list">
        <li class="header__nav--element" v-text="data.title" />
      </ul>
    </div>
  </header>
</template>
<script>
import { inject } from 'vue';
export default {
  name: 'HsHeader',
  setup() {
    const data = inject('header');
    return {
      data
    };
  }
};
</script>
<style scoped src="./style.scss" lang="scss" />
