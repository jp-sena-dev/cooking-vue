import type { Category } from '@/interfaces/category';

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch('https://gist.githubusercontent.com/jp-sena-dev/8c58a4af68e1f89f6fda57ea8fc109c0/raw/815bef480aa24d31db3367e2d3a86ed96d1b3575/cooking-categories.json');
  return response.json();
}
