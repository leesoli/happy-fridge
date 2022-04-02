import React from "react"

export default function(props) {
  return (
    <div className="main-recipe"
      onClick={() => props.changeView("recipe", props.value)}
    >

      <img className="main-recipe-image" src={props.recipe.image} />

      <div className="main-recipe-title">{props.recipe.title}
      </div>

      <div className="main-recipe-info">
        <span>{props.recipe.likes} likes</span>
        <span>Missing Ingredients: {props.recipe.missedIngredientCount}</span>
      </div>

    </div>
  )
}