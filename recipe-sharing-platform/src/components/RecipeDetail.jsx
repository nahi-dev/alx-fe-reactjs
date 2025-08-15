import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Recipe Detail Page</h1>
      <p>Showing details for recipe ID: {id}</p>
    </div>
  );
}

export default RecipeDetail;
