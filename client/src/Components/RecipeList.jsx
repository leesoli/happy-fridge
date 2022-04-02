import React, { useState } from "react"
import Recipe from './Recipe.jsx'
// import List from '../../../data/sampleList'

export default function(props) {
  const [recipeList, setRecipeList] = useState(props.recipeList.results)

  const recipeItem = recipeList.map(recipe => (<Recipe
        key={recipe.id}
        recipe={recipe}
        changeView={props.changeView}
        value={recipe.id}
      />
    ))

  return (
    <div className="recipe-wrapper">
      {recipeItem}
    </div>
  )
}