<script setup lang="ts">
  import SelectableIngredient from './SelectableIngredient.vue';
  import type { Category } from '@/interfaces/category';

  defineProps<{
    category: Category,
  }>();

  defineEmits(['addIngredient', 'removeIngredient']);
</script>

<template>
  <article class="card-category">
    <header class="card-category-header">
      <h2 class="paragraph-lg card-category-nome">{{ category.name }}</h2>

      <ul class="card-category-ingredients">
        <li v-for="ingredient in category.ingredients" :key="ingredient">
          <SelectableIngredient :ingredient="ingredient" @add-ingredient="$emit('addIngredient', $event)"  @remove-ingredient="$emit('removeIngredient', $event)"/>
        </li>
      </ul>
    </header>
  </article>
</template>

<style scoped>
.card-category {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--white, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.card-category-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.card-category-nome {
  text-align: center;
  color: var(--medium-green, #3D6D4A);
  font-weight: 700;
}

.card-category-ingredients {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>