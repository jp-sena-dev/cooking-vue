<script setup lang="ts">
  defineProps<{ text: string }>();
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 320px;
  height: 70px;
  cursor: pointer;
  background-color: var(--coral);
  border-radius: 50px;
  color: var(--white);
  font-weight: bold;
  font-size: 30px;
}

button:active {
  background-color: var(--ocher);
  width: 335px;
  height: 65px;
}
</style>