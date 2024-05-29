<script setup lang="ts">
defineProps<{ text: string; active?: boolean; }>();
</script>

<template>
  <span :class="['tag', { active }]">
    {{ text }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--gray);
  background-color: var(--light-gray);
  font-weight: 400;
}

.tag.active {
  color: var(--white);
  background: var(--coral);
  font-weight: 700;
}
</style>