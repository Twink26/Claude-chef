export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient.toLowerCase()} role="listitem">{ingredient}</li> // safer key + accessibility
    ))
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            {props.ingredients.length === 0 ? (
                <p>No ingredients added yet.</p> // fallback message
            ) : (
                <ul className="ingredients-list" aria-live="polite" role="list">
                    {ingredientsListItems}
                </ul>
            )}
            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    )
}
