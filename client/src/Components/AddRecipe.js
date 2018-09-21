import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRecipe, clearNewRecipe } from '../actions';


class AddRecipe extends Component {
    state = {
        formdata:{
            name:'',
            ingredients:'',
            directions:''
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
submitForm =(e) => {
e.preventDefault();
this.props.dispatch(addRecipe)({
    ...this.state.formdata,
    ownerId:this.props.user.login.id
})

}

componentWillUnmount() {
    this.props.dispatch(clearNewRecipe())
}
    render(){
        return (
            <div>
            <form onSubmit={this.submitForm}>
            <h2> Add A New Recipe </h2>
            <input 
            type="text"
            placeholer="name"
            value={this.state.formdata.name}
            onChange={(event)=> this.handleInput(event,'name')}
            />

            <textarea
            
            placeholer="ingredients"
            value={this.state.formdata.ingredients}
            onChange={(event)=> this.handleInput(event,'ingredients')}
            />
            <textarea
            
            placeholer="directions"
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
            </div>
        )

    }
       
    
}
function mapStateToProps(state) {
    return {
        recipes:state.recipes
    }
}

export default connect(mapStateToProps) (AddRecipe);