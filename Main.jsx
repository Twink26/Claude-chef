import React from "react"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        
      
       
        const newIngredient = formData.get("ingredient")
        setIngredients(previousIngredients => [...previousIngredients, newIngredient])
        
    }
    return (
        <main>
            <form  action={addIngredient} className="add-Ingredient-form">
                <input 
              
                type="text"
                aria-label="Add ingredient"
                placeholder="e.g oregano"
                name="ingredient"event
            />
            <button>
                Add ingredient
            </button> 

            </form>
            <section>
                <h2>Ingredients on Hand:</h2>
                <ul className="Ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a Recipe?</h3>
                        <p>Generate  recipe from your list of ingredients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}