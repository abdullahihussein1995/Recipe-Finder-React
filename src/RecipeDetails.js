import React from "react";
import { useState } from "react";


function RecipeDetails({ recipe }) {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            {/* Add more detailed information about the recipe here */}
        </div>
    );
}

export default RecipeDetails;
