import React, { Component } from 'react';
import {BrowserRouter as Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import LandingPage from './Components/LandingPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import AddRecipe from './Components/AddRecipe';
import RecipeDetails from './Components/RecipeDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/recipe-details" component={RecipeDetails} /> 
      </div>
    );
  }
}

export default App;
