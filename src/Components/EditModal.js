import React, { Component } from 'react';
import $ from 'jquery';
import uuid from 'uuid';

class EditModal extends Component {

    constructor() {
        super();
        this.state = {
            newRecipe: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formRef = null;
    }

    componentDidMount() {
        
        $(".ingredients").focus(() => {
            if (document.getElementById('ingredients').value === '') {
                document.getElementById('ingredients').value += '• ';
            }
        });

        $(".ingredients").keyup((event) => {
            let keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode === 13) {
                document.getElementById('ingredients').value += '• ';

            }
            let txtval = document.getElementById('ingredients').value;
            if (txtval.substr(txtval.length - 1) == '\n') {
                document.getElementById('ingredients').value = txtval.substring(0, txtval.length - 1);
            }
        })
    }

    handleSubmit(event) {
        let ingredients = this.refs.ingredients.value.split("• ").filter((word) => word.length > 0).map((ingredient) => {
            return (
                <li key={uuid.v4()}>{ingredient}</li>
            )
        });

        this.setState({newRecipe: {
            name: this.refs.name.value.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' '),
            id: uuid.v4(),
            ingredients: ingredients,
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
                        <textarea className="ingredients" id="ingredients" name="ingredients" type="text" ref="ingredients" ></textarea>
                    </div>
                    <div>
                        <label>Instructions</label>
                        <textarea type="text" ref="instructions"></textarea>
                    </div>       
                    
                    <input type="submit" value="Save" />
                    <button onClick={this.props.closeModal}>Close</button>
                     
                </form>               
            </div>
        )
    }
}

export default EditModal;