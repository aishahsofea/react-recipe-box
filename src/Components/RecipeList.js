import React, { Component } from 'react';

class RecipeList extends Component {

    handleConsoleRecipe(event) {
        console.log(event.target);
    }

    render() {
        let listRecipes = this.props.recipes.map((recipe) => {
            return (
                <li key={recipe.id} onClick={this.handleConsoleRecipe}>{recipe.name}</li>
            )
        })

        return (
            <div>
                <h1>Recipe List</h1> 
                <div>
                    <ul>{listRecipes}</ul>
                </div>   
            </div>
            

        )
    }
}

export default RecipeList;
