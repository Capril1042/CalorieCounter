import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipeWithAdder, clearRecipeWithAdder } from '../actions';;


class RecipeView extends Component {

    componentWillMount() {
        this.props.dispatch(getRecipeWithAdder(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearRecipeWithAdder())
    }

    handleClick(e){
        e.preventDefault();
        window.location.href="/recipes";
    }

    renderRecipe =(recipes) => (
        recipes.recipe ?
        <div className="recipeview">
        <h2>{recipes.recipe.name} </h2>
        <div>
        <span>Added by</span> {recipes.adder.username}
        </div>
        <div>{recipes.recipe.ingredients}</div>
        <div>{recipes.recipe.directions}</div>
        </div>
        :null
    )

    render () {
        let recipes = this.props.recipes
        return (
            <section className="recipe">
                <div className="recipe-recipeview">

                    {this.renderRecipe(recipes)}
                    
            <button className="backto" onClick={this.handleClick}>back to all recipes</button>
            
            </div></section>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes:state.recipes
    }
}

export default connect(mapStateToProps)(RecipeView)