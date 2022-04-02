import React from 'react';
export default function RecipeDetails(props) {

  return (
    <div>

      <img src={props.recipeData.image} />
      <h3>{props.recipeData.title}</h3>
      <div>
        <span>Serving size: {props.recipeData.servings}</span>
      </div>

      <h4>Ingredients</h4>
      <ul>
        <li></li>
      </ul>
      <h4>Directions</h4>
      <p>{props.recipeData.instructions}</p>

    </div>
  )

}