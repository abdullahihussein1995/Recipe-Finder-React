import React from "react";
import { useState } from "react";


function RecipesList({ recipes }) {
    return (
        <div className="recipes-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title} />
                    {/* Add more recipe details here */}
                </div>
            ))}
        </div>
    );
}

export default RecipesList;