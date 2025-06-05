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
            <form  action={addIngredient} className="form">
                <input 
                onChange
                type="text"
                aria-label="Add ingredient"
                placeholder="e.g oregano"
                name="ingredient"event
            />
            <button>
                Add ingredient
            </button> 

            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}