import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  generateRecommendations: () => {
    const { favorites, recipes } = get();
    // Simple mock: recommend recipes NOT in favorites, randomly selected
    const recommended = recipes
      .filter((r) => !favorites.includes(r.id))
      .filter(() => Math.random() > 0.5);
    set({ recommendations: recommended });
  },

  // Getter for favorite recipe objects
  get favoriteRecipes() {
    const { favorites, recipes } = get();
    return favorites
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  },
}));
