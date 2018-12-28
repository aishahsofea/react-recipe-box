import React, { Component } from 'react';
import './App.css';
import RecipeList from './Components/RecipeList';
import IndividualRecipe from './Components/IndividualRecipe';

class App extends Component {
  render() {
    return(
      <div>
        <div>TIS MA APPP</div>
        <RecipeList />
        <IndividualRecipe />
      </div>
      
    );
  }
}

export default App;
