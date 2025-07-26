// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./components/RecipeDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  </BrowserRouter>
);
