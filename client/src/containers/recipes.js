import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';
import RecipeItem from '../Components/recipeitem';



class RecipeContainer extends Component {
   
    componentWillMount() {
        this.props.dispatch(getRecipes(6,0,'desc'))
    }

    renderItems = (recipes) => (
        recipes.list ?
            recipes.list.map(item => (
                <RecipeItem {...item} key={item._id} />
            ))

        :null
    )

    loadmore =()=>{
        let count = this.props.recipes.list.length;
        this.props.dispatch(getRecipes(6,count,'desc', this.props.recipes.list))
    }

    render() {
        return (
            <div>
            {this.renderItems(this.props.recipes)}
            <div className="loadmore" onClick={this.loadmore}>
            Show More Recipes</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        recipes:state.recipes
    }
}

export default connect(mapStateToProps)(RecipeContainer)