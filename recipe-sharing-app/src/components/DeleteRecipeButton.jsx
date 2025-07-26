import React from "react";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: "10px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        padding: "8px 12px",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
