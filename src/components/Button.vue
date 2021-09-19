<template>
  <button>{{ content }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    content: {
      type: String as PropType<string | undefined>,
      default: 'content',
    },
  },
});
</script>

<style scoped></style>
