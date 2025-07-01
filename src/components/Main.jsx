

export default function Main(){
  const ingredients = ["Bacon", "Chicken", "cheese"];

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function handleSubmit (event){
    event.preventDefault()
    console.log("Clicked!!")
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  return(
    <main>
      <form onClick={handleSubmit} className="add-ingredient-form">
        <input 
          type="text" 
          placeholder="e.g. Sliced Cheese"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}