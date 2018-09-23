import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRecipe, clearNewRecipe } from '../actions';


class AddRecipe extends Component {
    state = {
        formdata:{
            name:'name',
            ingredients:'ingredients',
            directions:'directions'
        }
    }


handleInput = (event,name) => {
 const newFormdata = {
     ...this.state.formdata
 }
 newFormdata [name]= event.target.value

 this.setState ({
     formdata:newFormdata
 })
}


showNewRecipe = (recipe)=> (
    recipe.post?
    <div>
    <Link to={`recipe/${recipe.recipeId}`}>
    Click to see recipe!
    </Link>
    </div>
    :null
)

  submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addRecipe({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

componentWillUnmount() {
    this.props.dispatch(clearNewRecipe())
}
    render(){
        return (
            <section className="recipeformadd">
            <form onSubmit={this.submitForm} className="add-recipe-form">
            <h2> Add A New Recipe </h2>
            <input 
            type="text"
            placeholder="Recipe Name"
            value={this.state.formdata.name}
            onChange={(event)=> this.handleInput(event,'name')}
            />

            <textarea
            
            placeholder="ingredients"
            value={this.state.formdata.ingredients}
            onChange={(event)=> this.handleInput(event,'ingredients')}
            />
            <textarea
            
            placeholder="directions"
            value={this.state.formdata.directions}
            onChange={(event)=> this.handleInput(event,'directions')}
            />

            <button type="submit"> Add Recipe </button>
            {
                this.props.recipes.newrecipe ?
                    this.showNewRecipe(this.props.recipes.newrecipe)
                :null
            }
            
            </form>
            </section>
        )

    }
       
    
}
function mapStateToProps(state) {
    return {
        recipes:state.recipes
    }
}

export default connect(mapStateToProps)(AddRecipe);