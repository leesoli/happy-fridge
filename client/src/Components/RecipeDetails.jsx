import React from 'react';
export default function RecipeDetails(props) {
  let recipe = props.recipeData;
  let directions = recipe.instructions.split("\n")
  let direction = directions.map(dir => (
      <li className="recipe-list">{dir}</li>
    ))

  return (
    <div className="recipe-container">
      <div className="recipe-image-wrapper">
        <img className="recipe-image" src={recipe.image} />
      </div>

      <main className="recipe-info">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div>
          <span className="recipe-details">Serves: {recipe.servings}</span>
          <span className="recipe-details">Like button</span>
          <span className="recipe-details">Share Button</span>
        </div>


        <ul className="recipe-ingredients-wrapper">
          <h4 className="recipe-ingredients-title">{recipe.extendedIngredients.length > 0? `Ingredients (${recipe.extendedIngredients.length})` : Ingredient}</h4>
          {recipe.extendedIngredients.map(ingredient => (<li className="ingredient-list">{ingredient.name}</li>))}
        </ul>

        <ul className="recipe-directions-wrapper">
          <h4 className="recipe-directions-title">Directions</h4>
          {direction}
        </ul>
      </main>
    </div>
  )

}