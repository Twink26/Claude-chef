import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getrecipefromai} from "./ai"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    
    async function getrecipe(){
        const recipemarkdown = await getrecipefromai(ingredients)
        setRecipe(recipemarkdown)
    }
    function addIngredient(event) {
    event.preventDefault(); // ✅ stops page reload
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");

    if (newIngredient.trim() === "") return; // Avoid empty ingredients

    setIngredients(prev => [...prev, newIngredient]);
    event.target.reset(); // ✅ clears input field
}


    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getrecipe={getrecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}