import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import RecipeList from './Components/RecipeList';
import IndividualRecipe from './Components/IndividualRecipe';

class App extends Component {

  constructor() {
    super();
    this.state = {
      recipes: []
    }
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentWillMount() {
    this.setState({recipes: [
      {
        name: 'Beef Lasagna',
        id: uuid.v4(),
        ingredients: ' ',
        instructions: ' '
      },
      {
        name: 'Chicken Pie',
        id: uuid.v4(),
        ingredients: ' ',
        instructions: ' '
      },
      {
        name: 'Chocolate Cake',
        id: uuid.v4(),
        ingredients: ' ',
        instructions: ' '
      }
    ]
  })
  }

  updateRecipe(recipe) {
    let recipes = this.state.recipes;
    recipes.push(recipe);
    this.setState({recipes: recipes})
    console.log(this.state);
}

  render() {
    return(
      <div>
        <div>TIS MA APPP</div>
        <RecipeList recipes={this.state.recipes} />
        <IndividualRecipe updateList={this.updateRecipe} />
      </div>
      
    );
  }
}

export default App;
