import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipeId);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipeId)}>
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
      )}

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipeId} />
    </div>
  );
};

export default RecipeDetails;
