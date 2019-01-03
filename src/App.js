import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import RecipeList from './Components/RecipeList';
import IndividualRecipe from './Components/IndividualRecipe';

class App extends Component {

  constructor() {
    super();
    this.state = {
      recipes: [],
      display: ''
    }
    this.updateRecipe = this.updateRecipe.bind(this);
    this.selectedRecipe = this.selectedRecipe.bind(this);
    this.displayCurrentRecipe = this.displayCurrentRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  componentWillMount() {
    this.setState({recipes: [
        {
          name: 'Beef Lasagna',
          id: uuid.v4(),
          ingredients: 'beef',
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

  componentDidMount() {
    this.setState({display: {
      name: this.state.recipes[0].name,
      ingredients: this.state.recipes[0].ingredients,
      instructions: this.state.recipes[0].instructions
    } })
  }

  updateRecipe(recipe) {
    let recipes = this.state.recipes;
    recipes.push(recipe);
    this.setState({recipes: recipes})
    console.log(this.state);
}

  removeRecipe(recipe) {
    let filteredRecipe = this.state.recipes.filter((recipe) => recipe.name !== this.state.display.name);
    this.setState({
      recipes: filteredRecipe,
      display: {
        name: filteredRecipe[0].name,
        ingredients: filteredRecipe[0].ingredients,
        instructions: filteredRecipe[0].instructions
      }
    })
  }

  displayCurrentRecipe(event) {
    let filtered = this.state.recipes.filter((recipe) => recipe.name === event.target.textContent)[0];
    console.log(filtered.name);
    this.setState({display: {
      name: filtered.name,
      ingredients: filtered.ingredients,
      instructions: filtered.instructions
    }})

  }

  selectedRecipe(recipe) {
    return (
      <div>
        <h4>{this.state.display.name}</h4>

        <h5>Ingredients:</h5>
        <p>{this.state.display.ingredients}</p>
        
        <h5>Instructions:</h5>
        <p>{this.state.display.instructions}</p>
      </div>
    )
  }

  render() {

    let CurrentRecipe = this.selectedRecipe;

    return(
      <div className="app">
        <div className="app-content">
          <div className="app-title">RECIPE BOX</div>
          <RecipeList recipes={this.state.recipes} displayRecipe={this.displayCurrentRecipe} />
          <IndividualRecipe updateList={this.updateRecipe} currentRecipe={<CurrentRecipe/>} removeRecipe={this.removeRecipe} />    
        </div>
                                 
      </div>
      
    );
  }
}

export default App;
