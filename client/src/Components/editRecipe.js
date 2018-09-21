import React,  { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRecipe, updateRecipe, clearRecipe, deleteRecipe } from '../actions';


class EditRecipe extends PureComponent {
    state = {
        formdata:{
            _id:this.props.params.id,
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



submitForm =(e) => {
e.preventDefault();
this.props.dispatch(updateRecipe(this.state.formdata))


}

deleteIt=()=>{
    this.props.dispatch(deleteRecipe(this.props.match.params.id))
}

redirectUser = () => {
    setTimeout(()=> {
        this.props.history.push('/')
    },1000)
}

componentWillMount(){
    this.props.dispatch(getRecipe(this.props.match.parms.id))
}

componentWillReceiveProps(nextProps) {
    let recipe = nextProps.recipes.recipe;
    
    this.setState({
        formdata:{
            _id:recipe._id,
            name: recipe.name,
            ingredients: recipe.ingredients,
            directions: recipe.directions
        }

    })
}

componentWillUnmount(){
    this.props.dispatch(clearRecipe())
}

    render(){
        let recipes = this.props.recipes
        return (
            <div>
            {recipes.updateRecipe ?
            <div>
                recipe updated!, <Link to={`/recipes/${recipes.recipe._id}`}>
                </Link>
            </div>
            :null
            }
            {
                recipes.deleteRecipe ?
                    <div>
                    Recipe Deleted
                    {this.redirectUser()}
                    </div>
                :null
            }

            <form onSubmit={this.submitForm}>
            <h2> Edit Recipe </h2>
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

            <button type="submit"> Edit Recipe </button>
           <button onClick={this.deleteIt}>Delete Recipe </button>
            
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

export default connect(mapStateToProps) (EditRecipe);