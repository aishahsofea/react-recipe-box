import React, { Component } from 'react';
import './RecipeList.css';

class RecipeList extends Component {

    render() {
        let listRecipes = this.props.recipes.map((recipe) => {
            return (
                <li key={recipe.id} onClick={this.props.displayRecipe}>{recipe.name}</li>
            )
        })

        return (
            <div>

                <div className="recipe-list">
                    <ul>{listRecipes}</ul>
                </div>   
            </div>
        )
    }
}

export default RecipeList;
