import React, { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getrecipefromai } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState("");

  // add new ingredient
  const addIngredient = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;                  // skip blanks
    setIngredients([...ingredients, trimmed]);
    setInput("");                          // clear input
  };

  // fetch recipe from Hugging Face
  const getRecipe = async () => {
    if (ingredients.length === 0) return;
    const md = await getrecipefromai(ingredients);
    setRecipe(md);
  };

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}   // prop name matches IngredientsList
        />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
