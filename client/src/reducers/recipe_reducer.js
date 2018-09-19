export default function(state ={}, action) {
    switch(action.type){
        case'GET_RECIPES':
            return {...state, list:action.payload }
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
        default:
            return state;
    }
}