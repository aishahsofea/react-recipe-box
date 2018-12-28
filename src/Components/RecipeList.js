import React, { Component } from 'react';
import uuid from 'uuid';

class RecipeList extends Component {

    constructor() {
        super();
        this.state = {
            recipes: [
                {
                    name: 'Beef Lasagna',
                    id: uuid.v4()
                },
                {
                    name: 'Chicken Pie',
                    id: uuid.v4()
                },
                {
                    name: 'Chocolate Cake',
                    id: uuid.v4()
                }
            ]
        }
        this.handleConsoleRecipe = this.handleConsoleRecipe.bind(this);
    }

    handleConsoleRecipe(event) {
        console.log(event.target);
        console.log(this.state.recipes[0])
    }

    render() {
        let listRecipes = this.state.recipes.map((recipe) => {
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
