import { combineReducers } from 'redux';
import recipes from './recipe_reducer';
import user from './user_reducer';

const rootReducer = combineReducers ({
recipes,
user
});

export default rootReducer;