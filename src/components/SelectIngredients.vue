<script setup lang="ts">
import CardCategory from './CardCategory.vue';
import NavButton from './NavButton.vue';

import { getCategories } from '@/http/categories';
import type { Category } from '@/interfaces/category';
import { onBeforeMount, ref } from 'vue';
defineEmits(['addIngredient', 'removeIngredient', 'searchRecepis']);

const categories = ref<Category[]>([]);

onBeforeMount(() => {
  (async () => {
    categories.value = await getCategories();
  })()
  
})
</script>

<template>
  <section class="select-ingredients">
    <h1 class="header title-ingredients">Ingredients</h1>

    <p class="paragaph-lg instructions">Select the ingredients you want to use in this recipe below:</p>

    <ul class="categories">
      <li v-for="category in categories" :key="category.name">
        <CardCategory :category="category" @add-ingredient="$emit('addIngredient', $event)" @remove-ingredient="$emit('removeIngredient', $event)"/>
      </li>
    </ul>

    <NavButton @click="$emit('searchRecepis')" text="Search recipes"/>
  </section>
</template>

<style scoped>
button {
  width: 350px;
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

.select-ingredients {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-ingredients {
  color: var(--medium-green, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}
</style>