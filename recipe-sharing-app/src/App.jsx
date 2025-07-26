import AddRecipeForm from "./components/AddRecipeForm";

import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "1rem" }}>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />

      <hr />

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
