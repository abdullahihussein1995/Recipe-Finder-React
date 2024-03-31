import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipesList from './RecipesList'; // This is the component you will create next

function App() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const fetchRecipes = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=9dca53d3fd2e4ffc8dd6aa14303de23e`);
            const data = await response.json();
            setRecipes(data);
        } catch(error) {
            console.error("Error fetching data: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <SearchBar 
                query={query} 
                onInputChange={handleInputChange}
                onSearch={fetchRecipes}
            />
            {isLoading ? <p>Loading recipes...</p> : <RecipesList recipes={recipes} />}
        </div>
    );
}

export default App;
