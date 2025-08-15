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
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md shadow-md mb-6"
      />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients &&
          recipe.ingredients.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions &&
          recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {step}
            </li>
          ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
