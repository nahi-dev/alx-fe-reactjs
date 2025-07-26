import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    // <-- renamed parameter here
    event.preventDefault(); // <-- explicit call here
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit Title"
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "6px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Edit Description"
        rows={3}
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          padding: "6px",
        }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
