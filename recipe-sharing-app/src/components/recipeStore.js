import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Getter: filtered recipes based on searchTerm
  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));
