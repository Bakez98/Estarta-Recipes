import React from "react";
import { Routes, Route } from "react-router-dom";

//Component
import NavBar from "./Compnents/NavBar";

//Pages
import FoodCatagories from "./Pages/FoodCatagories/index"
import AddRecipes from "./Pages/AddRecipes/index";
import SingleCatagory from "./Pages/SingleCatagory/index"
import SingleCatagoryInformation from "./Pages/SingleCatagoryInformation/index"

function App() { 

  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<FoodCatagories />} />
        <Route path="/AddRecipes" element={<AddRecipes />} />
        <Route path="/SingleCatagory" element={<SingleCatagory />} />
        <Route
          path="/SingleCatagoryInformation"
          element={<SingleCatagoryInformation />}
        />
      </Routes>
    </div>
  );
}

export default App;
