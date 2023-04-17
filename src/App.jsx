import React from "react";
import { Routes, Route } from "react-router-dom";

//Component
import NavBar from "./Compnents/NavBar";

//Pages
import FoodCategories from "./Pages/FoodCategories/index"
import AddRecipes from "./Pages/AddRecipes/index";
import SingleCategory from "./Pages/SingleCategory/index"
import SingleRecipeInformation from "./Pages/SingleRecipeInformation/index"

function App() { 

  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<FoodCategories />} />
        <Route path="/AddRecipes" element={<AddRecipes />} />
        <Route path="/SingleCategory" element={<SingleCategory />} />
        <Route
          path="/SingleRecipeInformation/:id"
          element={<SingleRecipeInformation />}
        />
      </Routes>
    </div>
  );
}

export default App;
