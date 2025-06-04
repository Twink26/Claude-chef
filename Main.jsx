export default function Main(){
    const ingredients = ["chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return (
        <main>
            <form  onSubmit={handleSubmit} className="form">
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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}