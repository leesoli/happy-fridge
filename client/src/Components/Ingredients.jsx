import React from 'react'

export default function Ingredients(props) {

const ingredients = Object.keys(props.ingredientOptions)

    const ingredient = ingredients.map(item => {
      return (
        <span className="ingredient-checkbox">
          <input
            type="checkbox"
            id={item}
            onChange={props.handleChange}
            checked={props.ingredientOptions[item]}
            name="ingredientOptions"
          >
          </input>
          <label htmlFor={item}> {item}</label>
        </span>
      )
    })

  return (
    <div className="ingredient-wrapper">
      <form onSubmit={props.handleSubmit}>
        <h3 className="ingredient-box-title">Choose Ingredients</h3>
        <div>
          {ingredient}
        </div>
      <button className="ingredient-submit-button">Submit</button>
      </form>
    </div>
  )
}