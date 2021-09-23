<template>
  <button>{{ content }}</button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

export interface ButtonProps {
  content?: string;
}

withDefaults(defineProps<ButtonProps>(), {
  content: 'content',
});
</script>

<style scoped></style>
