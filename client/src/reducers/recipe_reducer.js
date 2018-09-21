export default function(state ={}, action) {
    switch(action.type){
        case'GET_RECIPES':
            return {...state, list:action.payload }

        case 'GET_RECIPE':
            return {...state, recipe:action.payload}
        case 'GET_RECIPE_W_ADDER':
            return {
                ...state,
                recipe:action.payload.recipe,
                adder:action.payload.adder
            }
        case 'CLEAR_RECIPE_W_ADDER':
            return {
                 ...state,
                recipe:action.payload.recipe,
                adder:action.payload.adder
            }
        case 'ADD_RECIPE':
            return {
            ...state,
            newrecipe:action.payload
        }
        case 'CLEAR_NEW_RECIPE':
            return{
            ...state,newrecipe:action.payload
        }
        case 'UPDATE_RECIPE':
            return{
                ...state, 
                updateRecipe:action.payload.success,
                recipe:action.payload.doc
            }
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipeDeleted:action.payload
            }
        case 'CLEAR_RECIPE':
            return {
                ...state,
                updateRecipe:action.payload.updateRecipe,
                recipe:action.payload.recipe,
                recipeDeleted:action.payload.recipeDeleted
            }
        default:
            return state;
    }
}