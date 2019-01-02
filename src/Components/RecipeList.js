import React, { Component } from 'react';
import './RecipeList.css';

class RecipeList extends Component {

    handleConsoleRecipe(event) {
        console.log(event.target.textContent);
    }

    render() {
        let listRecipes = this.props.recipes.map((recipe) => {
            return (
                <li key={recipe.id} onClick={this.props.displayRecipe}>{recipe.name}</li>
            )
        })

        return (
            <div>
                <h2>Recipe List</h2> 
                <div className="recipe-list">
                    <ul>{listRecipes}</ul>
                </div>   
            </div>
        )
    }
}

export default RecipeList;
