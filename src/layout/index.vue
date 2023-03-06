<template>
  <HsHeader />
  <HsMain>
    <template #default="main">
      <slot name="main" v-bind="main" />
    </template>
  </HsMain>
  <HsFooter />
</template>

<script>
import { computed } from 'vue';
import HsMain from './HsMain';
import HsHeader from './HsHeader';
import HsFooter from './HsFooter';

export default {
  provide() {
    return ['header', 'main', 'footer'].reduce(
      (a, v) => ({ ...a, [v]: computed(() => this.getLayoutPart(v)) }),
      {}
    );
  },
  props: {
    blok: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  name: 'HsLayout',
  components: { HsHeader, HsMain, HsFooter },
  setup(props) {
    const getLayoutPart = name => {
      return props.blok.content.body.find(el => el.component.toLowerCase() === name);
    };
    return {
      getLayoutPart
    };
  }
};
</script>
