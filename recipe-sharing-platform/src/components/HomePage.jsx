import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Link to={`/recipe/${recipe.id}`}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <Link to={`/recipe/${recipe.id}`}>
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            </Link>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
