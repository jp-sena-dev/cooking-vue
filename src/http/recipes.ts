import type { Recipe } from '@/interfaces/recipe';

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch('https://gist.githubusercontent.com/jp-sena-dev/8c58a4af68e1f89f6fda57ea8fc109c0/raw/815bef480aa24d31db3367e2d3a86ed96d1b3575/dishes.json');
  return response.json();
}

export const getRecipesByIngredients = async (ingredients: string[]): Promise<Recipe[] | null> => {
  const recipes = await getRecipes();
  return recipes.filter((recipe) => recipe.ingredients.every((ingredientRecipe) => ingredients.includes(ingredientRecipe)));
}
