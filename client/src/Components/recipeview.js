import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div>
        <span>ingredients:</span><br></br>{recipes.recipe.ingredients}</div>
        <div>
        <span>directions:</span><br></br>
        {recipes.recipe.directions}</div>
        </div>
        :null
    )

    render () {
        let recipes = this.props.recipes
        return (
            <section className="recipe">
            <div className="dashnav">
                <h1> Recipe Tracker</h1>
                <div className="nav">
                  <Link to="/user" > dashboard
                
                </Link></div>
                <div className="nav">
                <Link to="/user/logout">
                            logout!
                        </Link> 
                </div> 
                </div>
                <div className="recipe-recipeview">

                    {this.renderRecipe(recipes)}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes:state.recipes
    }
}

export default connect(mapStateToProps)(RecipeView)