<template>
  <HsHeader />
  <HsMain />
  <HsFooter />
</template>

<script>
import HsMain from './HsMain/index.vue';
import HsHeader from './HsHeader/index.vue';
import HsFooter from './HsFooter/index.vue';

export default {
  name: 'HsLayout',
  components: { HsHeader, HsMain, HsFooter }
};
</script>
