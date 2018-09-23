import React from 'react';
import { Link } from 'react-router-dom';

const UserRecipeItem = (props) =>{
    return (
        <Link to={`edit-recipe/${props._id}`}>
        <div className="recipeitem">
        <h2> {props.name} </h2>
        </div>
        </Link>
    );
};

export default UserRecipeItem;