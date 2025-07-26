import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

import SearchBar from "./components/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
