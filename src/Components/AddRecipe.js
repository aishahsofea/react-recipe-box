import React, { Component } from 'react';
import uuid from 'uuid';

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            newRecipe: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = null;
    }

    handleSubmit(event) {
        this.setState({newRecipe: {
            name: this.refs.name.value.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' '),
            id: uuid.v4(),
            ingredients: this.refs.ingredients.value,
            instructions: this.refs.instructions.value
        }}, function(){
            this.props.addRecipe(this.state.newRecipe);
        })
        event.preventDefault();
        this.formRef.reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} ref={(ref) => this.formRef = ref} >
                    <h3>Add a Recipe</h3>
                    <div>
                        <label>Recipe</label>
                        <input type="text" ref="name"/>
                    </div>
                    <div>
                        <label>Ingredients</label>
                        <textarea type="text" ref="ingredients"></textarea>
                    </div>
                    <div>
                        <label>Instructions</label>
                        <textarea type="text" ref="instructions"></textarea>
                    </div>       
                    
                    <input type="submit" value="Add" />
                    <button onClick={this.props.displayHandler}>Close</button>
                </form>
                                
            </div>
        )
    }
}

export default AddRecipe;