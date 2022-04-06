import React from 'react'

export default function Ingredients(props) {

const vegetableIngredients = Object.keys(props.vegetableOptions)
const dairyAndEggIngredients = Object.keys(props.dairyAndEggOptions)
const fruitIngredients = Object.keys(props.fruitOptions)
const meatIngredients = Object.keys(props.meatOptions)

    const vegetableIngredient = vegetableIngredients.map(item => {
      return (
        <span className="ingredient-checkbox">
          <input
            type="checkbox"
            id={item}
            onChange={props.handleChange}
            checked={props.vegetableOptions[item]}
            name="vegetableOptions"
          />
          <label htmlFor={item}> {item}</label>
        </span>
      )
    })

    const dairyAndEggIngredient = dairyAndEggIngredients.map(item => {
      return (
        <span className="ingredient-checkbox">
          <input
            type="checkbox"
            id={item}
            onChange={props.handleChange}
            checked={props.dairyAndEggOptions[item]}
            name="dairyAndEggOptions"
          />
          <label htmlFor={item}> {item}</label>
        </span>
      )
    })

    const fruitIngredient = fruitIngredients.map(item => {
      return (
        <span className="ingredient-checkbox">
          <input
            type="checkbox"
            id={item}
            onChange={props.handleChange}
            checked={props.fruitOptions[item]}
            name="fruitOptions"
          />
          <label htmlFor={item}> {item}</label>
        </span>
      )
    })

    const meatIngredient = meatIngredients.map(item => {
      return (
        <span className="ingredient-checkbox">
          <input
            type="checkbox"
            id={item}
            onChange={props.handleChange}
            checked={props.meatOptions[item]}
            name="meatOptions"
          />
          <label htmlFor={item}> {item}</label>
        </span>
      )
    })

  return (
    <div className="ingredient-wrapper">
      <form onSubmit={props.handleSubmit}>
        <h3 className="ingredient-box-title">Choose Ingredients</h3>
        <div>
          <h4 className="ingredient-category-title">Vegetables</h4>
          {vegetableIngredient}
        </div>
        <div>
          <h4 className="ingredient-category-title">Fruit</h4>
          {fruitIngredient}
        </div>
        <div>
          <h4 className="ingredient-category-title">Meat</h4>
          {meatIngredient}
        </div>
        <div>
          <h4 className="ingredient-category-title">Dairy and Eggs</h4>
          {dairyAndEggIngredient}
        </div>
        <h3>Not finding your ingredients in the list? Input any additional ingredients below using a "," (comma) in between</h3>
        <textarea
          placeholder="Don't forget to include a comma in between each ingredient!"
          name="ingredientInput"
          onChange={props.handleChange}
          value={props.ingredientInput}
        />
      <button className="ingredient-search-button">Search</button>
      </form>
    </div>
  )
}