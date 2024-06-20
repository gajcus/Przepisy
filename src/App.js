import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import "./Components/Header/Header.css";
import Searchbar from "./Components/Searchbar/Searchbar.js";
import RecipesList from "./Components/RecipesList/RecipesList.js";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchInitialRecipes = () => {
      const appId = "1cc3a40f";
      const appKey = "6b4cc5e3d8f8296aabf95b03f46240c6";
      const query = "chicken";
      const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

      axios
        .get(url)
        .then((response) => {
          setRecipes(response.data.hits);
        })
        .catch((error) => {
          console.error("Error fetching data from Edamam API:", error);
        });
    };

    fetchInitialRecipes();
  }, []);

  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
