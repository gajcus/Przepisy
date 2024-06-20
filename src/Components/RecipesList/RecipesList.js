import React from "react";
import "./RecipesList.css";

export default function RecipesList({ recipes }) {
  return (
    <div className="results-container">
      {recipes.map((item, index) => (
        <div className="recipe-card" key={index}>
          <img
            className="recipe-image"
            src={item.recipe.image}
            alt={item.recipe.label}
          />
          <div className="recipe-info">
            <a
              className="recipe-title"
              href={item.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.recipe.label}
            </a>
            <span>{item.recipe.source}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
