import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",

  // Add recipe action
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const filteredRecipes = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Set entire recipes list
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Search term and filtering
  setSearchTerm: (term) =>
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes };
    }),

  // Favorites
  favorites: [],
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  // Recommendations based on favorites
  recommendations: [],
  generateRecommendations: () => {
    const favorites = get().favorites;

    const newRecommendations = favorites.map((fav, index) => ({
      id: index + 1000,
      title: `Recommended: ${fav.title}`,
      description: `Because you liked ${fav.title}`,
    }));

    set({ recommendations: newRecommendations });
  },
}));

export default useRecipeStore;
