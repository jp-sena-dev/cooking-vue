<script setup lang="ts">
import { getRecipesByIngredients } from '@/http/recipes';
import type { Recipe } from '@/interfaces/recipe';
import { onBeforeMount, ref } from 'vue';
import NavButton from './NavButton.vue';

const { ingredients } = defineProps<{ingredients: string[]}>();
const recipes = ref<Recipe[] | null>([]);
defineEmits(['changeList']);

onBeforeMount(() => {
  (async () => {
    recipes.value = await getRecipesByIngredients(ingredients);
  })()
  
})
</script>

<template>
  <h1 class="header-lg">Recipes</h1>
  <ul v-if="recipes?.length">
    <li v-for="recipe in recipes" :key="recipe.name">
      <img :src="recipe.image" :alt="recipe.name">
      <p>{{ recipe.name }}</p>
    </li>
  </ul>
  <div class="not-found" v-else-if="!recipes?.length">
    <p class="green">Oops, we couldn't find any results for your combination. Let's try again!</p>
    <img class="not-found" src="/src/assets/images/404.svg" alt="">
  </div>
  <NavButton text="Edit list" @Click="$emit('changeList')" />
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}
li {
  width: 19.5rem;
  /* padding: 1rem; */
  border-radius: 1rem;
  background: var(--white, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 210px;
    border-radius: 1rem 1rem 0 0;
  }

  p {
    padding: 16px 0;
    font-weight: bold
  }


  p.green {
    color: var(--medium-green);
  }
  
}
div.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img.not-found {
  margin: 0 auto;
  max-width: 350px;
  max-height: 350px;
}
</style>