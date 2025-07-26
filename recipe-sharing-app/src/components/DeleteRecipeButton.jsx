import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to home after deleting
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
