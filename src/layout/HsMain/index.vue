<template>
  <section>
    <slot :title="data.title" />
  </section>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'HsMain',
  setup() {
    const data = inject('main');
    return {
      data
    };
  }
};
</script>
