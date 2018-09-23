import React from 'react';
import UserRecipeContainer from '../containers/user_recipes';
import { Link } from 'react-router-dom';

const UserRecipes =() => {
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
            <div>
        <Link to="/user/add"> ADD a recipe </Link>
        </div>
                <UserRecipeContainer/>
            </div>
        </section>
    );
};

export default UserRecipes;