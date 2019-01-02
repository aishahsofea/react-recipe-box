import React, { Component } from 'react';
import AddRecipe from './AddRecipe';

class IndividualRecipe extends Component {
    constructor() {
        super();
        this.state = {
            isFormHidden: true,

        }
        this.handleDisplayRecipeForm = this.handleDisplayRecipeForm.bind(this);
    }

    handleDisplayRecipeForm() {
        this.setState({
            isFormHidden: !this.state.isFormHidden
        })
    }  

    render() {
        return (
            <div>
                <h2>Individual Recipe</h2>

                {this.props.currentRecipe}
                
                <button onClick={this.handleDisplayRecipeForm}>Add Recipe</button>
                {!this.state.isFormHidden && <AddRecipe displayHandler={this.handleDisplayRecipeForm} addRecipe={this.props.updateList} />}
            </div>
        )
    }
}

export default IndividualRecipe;