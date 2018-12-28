import React, { Component } from 'react';

class AddRecipe extends Component {
    constructor() {
        super();
        this.handleCloseForm = this.handleCloseForm.bind(this);
    }

    handleCloseForm() {
        console.log("trying to close form");
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Add a Recipe</h3>
                    <div>
                        <label>Recipe</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Instructions</label>
                        <input type="text"/>
                    </div>                    
                </form>
                <button onClick={this.props.displayHandler}>Close</button>                
            </div>
        )
    }
}

export default AddRecipe;