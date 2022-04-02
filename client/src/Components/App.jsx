import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search.jsx'
import Description from './Description.jsx'
import RecipeList from './RecipeList.jsx'
import RecipeDetails from './RecipeDetails.jsx'
import Ingredients from "./Ingredients.jsx"
// import clickedRecipeData from '../../../data/clickedRecipeData'
import apiKey from '../../../config-copy.js'

export default function App() {
  const [state, setState] = React.useState({
    view: "main",
    id: null,
    // recipeData: clickedRecipeData,
    recipeData: {},
    recipeList: {},
    ingredients: [],

    // create ingredient list for diff. categories of ingredients
    // dairy, eggs, fruit, excluding pantry
    ingredientOptions: { garlic: false, onion: false, tomato: false, potato: false, mushroom: false, avocado: false, carrots: false, broccoli: false, corn: false, romaine: false, squash: false, bokchoy: false, jalapeno: false}
  })

  function handleSubmit(e) {
    e.preventDefault();
    let newIngredients = [];
    for (let ingredient in state.ingredientOptions) {
      if (state.ingredientOptions[ingredient]) {
        newIngredients.push(ingredient)
      }
    }
    setState(prevState => ({
      ...prevState,
      ingredients: newIngredients
    }))
  }

  function changeView(view, id) {
    setState(prevState => ({
      ...prevState,
      view,
      id
    }))
  }

  function handleChange(event) {
    const {name, id, value, type, checked} = event.target

    setState(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? {
        ...prevState.ingredientOptions,
        [id]: checked
      } : value
    }))
  }

  React.useEffect(() => {
    let string = state.ingredients.join(", ")
    console.log(string)

    axios.get('/api/recipes', { params: { ingredients: string }})
      .then((res) => {
        console.log('res', res.data)
      })

  }, [state.ingredients])


  return (
    <div>

      <header
        className="main-page-header"
        onClick={() => changeView("main")}
      >
        <h1 className="main-page-title">Happy Fridge</h1>
      </header>

      <nav className="navbar-container">
        <ul className="navbar">
          <li className="list-items">home</li>
          <li className="list-items-logo">Happy Fridge</li>
        </ul>
        <ul className="navbar">
          <li className="list-items">sign up</li>
          <li className="list-items">sign in</li>
        </ul>
      </nav>

      {/* <Search /> */}
      <main className="main-page">

        <div>
          {state.view === "main" && <Ingredients
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            ingredientOptions={state.ingredientOptions}
            />}
          {(state.view === "main" && state.ingredients.length > 0) && <RecipeList changeView={changeView} recipeList={state.recipeList}/>}
        </div>

        {state.view === "main" && <Description />}

        {state.view === "recipe" && <RecipeDetails recipeId={state.id} recipeData={state.recipeData}/>}
      </main>

    </div>
  )
}