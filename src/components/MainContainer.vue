<script setup lang="ts">
  import { KeepAlive, ref } from 'vue';
  import SelectIngredients from './SelectIngredients.vue';
  import Tag from './Tag.vue';
  import ShowRecipes from './ShowRecipes.vue';
  type Pages = 'selectIngredients' | 'showRecipes';

  const ingredients = ref<string[]>([]);
  const content = ref<Pages>('selectIngredients');

  const handleAddIngredient = (ingredient: string) => ingredients.value.push(ingredient);

  const handlRemoveIngredient = (ingredientRemove: string) => {
    ingredients.value = ingredients.value.filter((ingredient) => ingredient !== ingredientRemove);
  };

  const navigateTo = (to: Pages) => content.value = to;

  const handleSearchRecepis = () => {
    if (ingredients.value.length) navigateTo('showRecipes');
  };

</script>

<template>
  <main class="main-container">
    <section>
      <span class="subtitle-lg your-text-list">
        Your list:
      </span>
      <ul v-if="ingredients.length" class="ingredients-list">
        <li v-for="ingredient in ingredients" :key="ingredient" class="ingredient"><Tag :active="true" :text="ingredient" /></li>
      </ul>
      <p v-else class="paragraph">
        Your list is empty, select ingredients to start.
      </p>
    </section>

    <KeepAlive :include="['SelectIngredients']">
      <SelectIngredients
        v-if="content === 'selectIngredients'"
        @add-ingredient="handleAddIngredient($event)"
        @remove-ingredient="handlRemoveIngredient($event)"
        @search-recepis="handleSearchRecepis"
      />
      <ShowRecipes :ingredients="ingredients" v-else-if="content === 'showRecipes'" @change-list="navigateTo('selectIngredients')" />
    </KeepAlive>
  </main>
</template>


<style scoped>
.main-container {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--medium-gray, #FFFAF3);
  color: var(--gray, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.your-text-list {
  color: var(--coral, #F0633C);
  display: block;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredients-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

@media only screen and (max-width: 1300px) {
  .main-container {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-container {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}

</style>