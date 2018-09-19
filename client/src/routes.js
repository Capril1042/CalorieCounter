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

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/recipe-details" component={RecipeDetails} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/recipe/:id" exact component={RecipeView} />
        </Switch>
    );
};

export default Routes;