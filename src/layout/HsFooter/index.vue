<template>
  <footer class="footer">Chau</footer>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'HsFooter',
  setup() {
    const data = inject('footer');
    return {
      data
    };
  }
};
</script>
<style scoped src="./style.scss" lang="scss" />
