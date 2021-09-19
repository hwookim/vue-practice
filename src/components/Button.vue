<template>
  <button>{{ content }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    content: {
      type: String,
      default: 'content',
    },
  },
});
</script>

<style scoped></style>
