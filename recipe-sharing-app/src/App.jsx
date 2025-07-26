import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

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
