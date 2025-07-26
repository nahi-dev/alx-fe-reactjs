// recipeStore.js
import { use } from "react";
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  favorites: [],
  recommendations: [],

  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  generateRecommendations: () => {
    const favorites = get().favorites;

    // This is where you implement your recommendation logic
    const newRecommendations = favorites.map((fav, index) => ({
      id: index + 100,
      title: `Recommended: ${fav.title}`,
      description: `Because you liked ${fav.title}`,
    }));

    set({ recommendations: newRecommendations });
  },
}));
export default useRecipeStore;
