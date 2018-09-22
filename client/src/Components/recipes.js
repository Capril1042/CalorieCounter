import React from 'react';
import RecipeContainer from '../containers/recipes'

const Recipes =() => {
    return(
        <section className="viewrecipes">
            <div className="recipecontainer">
                <RecipeContainer/>
            </div>
        </section>
    );
};

export default Recipes;