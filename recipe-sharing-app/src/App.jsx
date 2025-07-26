import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useRecipeStore } from "./components/recipeStore";

import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      {" "}
      {/* <-- Add Router here */}
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeListWithLinks />} />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const RecipeListWithLinks = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((recipe) => (
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
