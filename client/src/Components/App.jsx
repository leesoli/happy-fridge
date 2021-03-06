import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search.jsx'
import Description from './Description.jsx'
import RecipeList from './RecipeList.jsx'
import RecipeDetails from './RecipeDetails.jsx'
import Ingredients from './Ingredients.jsx'
import SignUp from './SignUp.jsx'

export default function App() {
  const [state, setState] = React.useState({
    view: "signUp",
    id: null,
    recipeData: {},
    recipes: {},
    ingredientList: "",
    ingredientInput: "",
    number: 8,
    vegetableOptions: { garlic: false, onion: false, tomato: false, potato: false, mushroom: false, avocado: false, carrots: false, broccoli: false, corn: false, romaine: false, squash: false, bokchoy: false, jalapeno: false, scallion: false, kale: false, cauliflower: false, cabbage: false, celery: false },
    dairyAndEggOptions: { butter: false, eggs: false, milk: false, yogurt: false, cream: false, buttermilk: false },
    fruitOptions: { strawberry: false, blueberry: false, orange: false, lemon: false, mango: false, coconut: false, apple: false, banana: false, watermelon: false, pineapple: false, peach: false, lime: false },
    meatOptions: { bacon: false, beef: false, chicken: false, ham: false, pork: false, sausage: false, prosciutto: false, chorizo: false, salami: false, lamb: false, bison: false },
    userInfo: { firstName: "", lastName: "", birthDate: "", email: "", password: "", confirmationPassword: "", receiveNewsletter: false }, favoritedRecipes: {},
    userData: {},
  })

  function submitUserInfo(e) {
    e.preventDefault();
    const { firstName, lastName, birthDate, email, password, confirmationPassword, receiveNewsletter } = state.userInfo
    const entries = Object.values(state.userInfo)

    if (password !== confirmationPassword) {
      console.log('Password does not match.')
    } else {
      for (var i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (entry === '') {
          console.log('Please complete form.')
          return;
        }
      }
    }
      console.log('Your account has been created!!')
      if (receiveNewsletter) {
        console.log('Thanks for signing up for our newsletter!')
      }
  }

  React.useEffect(() => {
    getRecipeList()
  }, [state.ingredientList, state.number])

  function handleSubmit(e) {
    e.preventDefault();
    let newIngredients = [];
    for (let ingredient in state.dairyAndEggOptions) {
      if (state.dairyAndEggOptions[ingredient]) {
        newIngredients.push(ingredient)
      }
    }
    for (let ingredient in state.vegetableOptions) {
      if (state.vegetableOptions[ingredient]) {
        newIngredients.push(ingredient)
      }
    }
    for (let ingredient in state.fruitOptions) {
      if (state.fruitOptions[ingredient]) {
        newIngredients.push(ingredient)
      }
    }
    for (let ingredient in state.meatOptions) {
      if (state.meatOptions[ingredient]) {
        newIngredients.push(ingredient)
      }
    }

    let ingredients = newIngredients.join(", ")

    // setState(prevState => ({
    //   ...prevState,
    //   ingredientList: ingredients,
    //   recipes: data
    // }))

    setState(prevState => ({
      ...prevState,
      ingredientList: prevState.ingredientInput ? prevState.ingredientInput.concat(",", ingredients) : ingredients
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

  function getRecipe(id) {
    axios.get("/api/recipe", { params: { recipe: id}})
      .then((res) => {
        setState((prevState) => ({
            ...prevState,
            view: "recipe",
            id,
            recipeData: res.data
        }))
      })
  }

  function handleUserInfo(event) {
    const {name, value, type, checked} = event.target
    setState(prevState => ({
      ...prevState,
      userInfo: {
        ...prevState.userInfo,
        [name]: type === "checkbox" ? checked: value
      }
    }))
  }

  function handleChange(event) {
    const {name, id, value, type, checked} = event.target
    setState(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? {
        ...prevState[name],
        [id]: checked
      } : value
    }))
  }

  function changeView(page) {
    setState(prevState => ({
      ...prevState,
      view: page
    }))
  }

  function renderPage() {
    if (state.view === "main") {
      return (
          <main className="main-page">
            <div>
              <Ingredients
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                vegetableOptions={state.vegetableOptions}
                dairyAndEggOptions={state.dairyAndEggOptions}
                fruitOptions={state.fruitOptions}
                meatOptions={state.meatOptions}
                />

              {Object.keys(state.recipes).length > 0 &&
              <RecipeList
                getRecipe={getRecipe}
                handleChange={handleChange}
                // number={state.number}
                recipes={state.recipes}
                handleShowMore={handleShowMore}/>}
            </div>
          </main>
      )
    } else if (state.view === "recipe") {
      return (
        <div>
          {state.view === "recipe" &&
          <RecipeDetails
            recipeId={state.id}
            recipeData={state.recipeData}/>}
        </div>
      )
    } else if (state.view === "signUp") {
      return (
        <SignUp
        userInfo={state.userInfo}
        submitUserInfo={submitUserInfo}
        handleUserInfo={handleUserInfo}
        />
      )
    }
  }

  return (
    <div>
      <header className="main-page-header">
        <h1 className="main-page-title">Happy Fridge</h1>
      </header>

      <nav className="navbar-container">
        <ul className="navbar">
          <li
            className="list-items"
            onClick={() => changeView("main")}
          >home</li>
          <li className="list-items-logo">Happy Fridge</li>
        </ul>
        <ul className="navbar">
          <li
          className="list-items"
          onClick={() => changeView("signUp")}
          handleChange={handleChange}
          >sign up</li>
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