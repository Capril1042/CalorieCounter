import React from 'react';
import RecipeContainer from '../containers/recipes';
import { Link } from 'react-router-dom';

const Recipes =() => {
    return(
        <section className="viewrecipes">
            <div className="dashnav"> 
                <div className="nav">
                  <Link to="/user" > <i className="fa fa-home"></i>back to dashboard
                
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