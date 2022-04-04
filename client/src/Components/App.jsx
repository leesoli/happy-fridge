import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search.jsx'
import Description from './Description.jsx'
import RecipeList from './RecipeList.jsx'
import RecipeDetails from './RecipeDetails.jsx'
import Ingredients from "./Ingredients.jsx"


export default function App() {
  const [state, setState] = React.useState({
    view: "main",
    id: null,
    recipeData: {},
    recipes: {},
    ingredientList: '',
    number: 8,

    // create ingredient list for diff. categories of ingredients
    // dairy, eggs, fruit, excluding pantry
    ingredientOptions: { garlic: false, onion: false, tomato: false, potato: false, mushroom: false, avocado: false, carrots: false, broccoli: false, corn: false, romaine: false, squash: false, bokchoy: false, jalapeno: false}
  })

  React.useEffect(() => {
    getRecipeList()
  }, [state.ingredientList, state.number])


  function handleSubmit(e) {
    e.preventDefault();
    let newIngredients = [];
    for (let ingredient in state.ingredientOptions) {
      if (state.ingredientOptions[ingredient]) {
        newIngredients.push(ingredient)
      }
    }

    let ingredients = newIngredients.join(', ')

    // setState(prevState => ({
    //   ...prevState,
    //   ingredientList: ingredients,
    //   recipes: data
    // }))

    setState(prevState => ({
      ...prevState,
      ingredientList: ingredients
    }))
  }

  function getRecipeList() {
    if (state.ingredientList) {
      axios.get('/api/recipes', { params: { ingredients: state.ingredientList, number: state.number}})
        .then(res => {
          setState(prevState => ({
            ...prevState,
            recipes: res.data
          }))
        })
    }
  }

  function handleShowMore(e) {
    e.preventDefault();
    // setState(prevState =>
    //   ({
    //   ...prevState,
    //   number: prevState.number + 8
    // }))

    setState(prevState => ({
      ...prevState,
      number: prevState.number + 8
    }))
  }

  function changeView(view, id) {
    axios.get('/api/recipe', { params: { recipe: id}})
      .then((res) => {
        setState((prevState) => ({
            ...prevState,
            view,
            id,
            recipeData: res.data
        }))
      })
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

  function renderPage() {
    if (state.view === 'main') {
      return (
          <main className="main-page">
            <div>
              <Ingredients
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                ingredientOptions={state.ingredientOptions} />

              {Object.keys(state.recipes).length > 0 &&
              <RecipeList
                changeView={changeView}
                // number={state.number}
                recipes={state.recipes}
                handleShowMore={handleShowMore}/>}
            </div>
          </main>
      )
    } else if (state.view === 'recipe') {
      return (
        <div>
          {state.view === 'recipe' &&
          <RecipeDetails
            recipeId={state.id}
            recipeData={state.recipeData}/>}
        </div>
      )
    }
  }

  return (
    <div>
      <header
        className="main-page-header"
        onClick={() => changeView("main")}>
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

      <main className="render-page">
        {renderPage()}
        <Description />
      </main>
    </div>
  )
}