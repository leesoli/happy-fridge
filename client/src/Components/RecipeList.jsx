import React, { useState } from "react"
import Recipe from './Recipe.jsx'

export default function(props) {

  // let recipeItem = [];
  // for (let i = 0; i < props.number; i++) {
  //   recipeItem.push(<Recipe
  //     key={recipeList[i].id}
  //     recipe={recipeList[i]}
  //     changeView={props.changeView}
  //     value={recipeList[i].id}
  //   />)
  // }

  const recipeItem = props.recipes.results.map(recipe => (<Recipe
    key={recipe.id}
    recipe={recipe}
    changeView={props.changeView}
    value={recipe.id}/>
  ))

  return (
    <div className="recipe-wrapper">
      {recipeItem}
      <button
        onClick={props.handleShowMore}
        className="show-more-button">Show More
      </button>
    </div>
  )
}