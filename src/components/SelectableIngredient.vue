<script setup lang="ts">
  import { ref } from 'vue';
  import Tag from './Tag.vue';

  const props = defineProps<{ ingredient: string }>();
  const emit = defineEmits(['addIngredient', 'removeIngredient']);

  const selected = ref(false);

  const handleClick = () => {
    selected.value = !selected.value

    selected.value ? emit('addIngredient', props.ingredient) : emit('removeIngredient', props.ingredient);
  }

</script>

<template>
  <button class="ingredient" @click="handleClick()" :aria-pressed="selected">
    <Tag :text="ingredient" :active="selected" />
  </button>
</template>


<style scoped>
  .ingredient {
    cursor: pointer;
  }
</style>