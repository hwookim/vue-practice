<template>
  <Button content="hi" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';

export default defineComponent({
  name: 'App',
  components: {
    Button,
  },
});
</script>

<style scoped></style>
