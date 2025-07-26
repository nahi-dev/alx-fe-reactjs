import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";

import RecipeList, { FilteredRecipeList } from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar /> {/* Added search input */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          {/* Show filtered recipes on home */}
          <Route path="/" element={<FilteredRecipeListWithLinks />} />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const FilteredRecipeListWithLinks = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 && <p>No matching recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;
