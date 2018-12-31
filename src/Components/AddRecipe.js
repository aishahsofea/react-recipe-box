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
            name: this.refs.name.value,
            id: uuid.v4(),
            ingredients: '',
            instructions: ''
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
                        <input type="ingredients" />
                    </div>
                    <div>
                        <label>Instructions</label>
                        <input type="instructions" />
                    </div>       
                    
                    <input type="submit" value="Add" />
                    <button onClick={this.props.displayHandler}>Close</button>
                </form>
                                
            </div>
        )
    }
}

export default AddRecipe;