import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import AddRecipe from './AddRecipe';
import './IndividualRecipe.css';
import EditModal from './EditModal';

class IndividualRecipe extends Component {

    render() {
        return (
            <div className="individual-recipe">

                <button onClick={this.props.removeRecipe}>Delete</button>
                <Popup trigger={<button>Edit Recipe</button>} modal >
                    {close => (<EditModal closeModal={() => close()} addRecipe={this.props.updateList}/>)}                
                </Popup>
                

                {this.props.currentRecipe}
                <Popup trigger={<button>Add Recipe</button>} modal >
                    {close => (<AddRecipe closeModal={() => close()} addRecipe={this.props.updateList}/>)}                
                </Popup>

            </div>
        )
    }
}

export default IndividualRecipe;