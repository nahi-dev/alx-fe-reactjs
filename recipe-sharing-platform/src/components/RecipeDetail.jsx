import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients &&
          recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions &&
          recipe.instructions.map((step, index) => <li key={index}>{step}</li>)}
      </ol>
    </div>
  );
}

export default RecipeDetail;
