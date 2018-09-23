import React from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import AddRecipe from './Components/AddRecipe';
import RecipeDetails from './Components/RecipeDetails';
import RecipeView from './Components/recipeview';
import Recipes from './Components/recipes';
import UserRecipeList from './containers/user_recipes';
import EditRecipe from './Components/editRecipe';
import Logout from './Components/logout';


import Auth from './Components/auth';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Auth(LandingPage,null)} />
            <Route path="/signin"  exact component={Auth(SignIn,false)} />
            <Route path="/user/logout" exact component={Auth(Logout,true)} />
            <Route path="/signup" exact component={Auth(SignUp,null)} />
            <Route path="/user" exact component={Auth(Dashboard,true)} />
            <Route path="/user/add" exact component={Auth(AddRecipe,true)} />
            <Route path="/recipe-details" component={RecipeDetails} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipe/:id" exact component={Auth(RecipeView,null)} />
            <Route path="/user/user-recipes" exact component={Auth(UserRecipeList,true)} />
            <Route path="/user/edit-recipe/:id" exact component={Auth(EditRecipe,true)} />
        </Switch>
    );
};

export default Routes;