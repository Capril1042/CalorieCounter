import React from 'react';
import RecipeContainer from '../containers/recipes';
import { Link } from 'react-router-dom';

const Recipes =() => {
    return(
        <section className="viewrecipes">
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
            <div className="recipecontainer">
                <RecipeContainer/>
            </div>
        </section>
    );
};

export default Recipes;