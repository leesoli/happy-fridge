import React from 'react';

export default class RecipesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="recipe-thumbnail">
        {this.props.list.map(recipe => (
          <div key={recipe.id}>
          <img src={recipe.image} />
          <div>{recipe.title}</div>
          <div>{recipe.time} Mins</div>
          <div>Need {recipe.missingIngredients} More Ingredients</div>
          <div>{recipe.likes} Likes </div>
          </div>
        ))}
      </div>
    )
  }
}