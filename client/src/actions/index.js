import axios from 'axios';


export function getRecipes(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    const request = axios.get(`/api/recipes?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                        if(list) {
                            return [...list, ...response.data]
                        } else {
                            return response.data
                            }
                        }
                    )
    
    return {
        type:'GET_RECIPES',
        payload:request
    }
}


export function getRecipeWithAdder(id) {
    const request = axios.get(`/api/getRecipe?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let recipe = data;

            axios.get(`/api/getRecipeAdder?id=${recipe.ownerId}`)
            .then(({data})=>{
                let response = {
                    recipe,
                    adder:data
                }

                dispatch({
                    type:'GET_RECIPE_W_ADDER',
                    payload:response
                })
            })
        })
    }
}

export function clearRecipeWithAdder() {
    return {
        type:'CLEAR_RECIPE_W_ADDER',
        payload:{
            recipe:{},
            adder:{}
        }
    }

}
 
 export function addRecipe(recipe) {
     const request = axios.post('/api/recipe', recipe)
                    .then(response => response.data);

                    return {
                        type:'ADD_RECIPE',
                        payload:request
                    }
 }

export function clearNewRecipe() {
        return{
            type:'CLEAR_NEW_RECIPE',
            payload:{}
        }
}

export function getUserRecipes(userId) {
    const request = axios.get(`/api/users_recipes?user=${userId}`)
                    .then(response => response.data)

    return {
        type: 'GET_USER_RECIPES',
        payload:request
    }
}

export function getRecipe(id){
    const request = axios.get(`api/getRecipe>id=${id}`)
                    .then(response => response.data);

    return{
        type:'GET_RECIPE',
        payload:request
    }

}

export function updateRecipe(data){
    const request = axios.post(`/api/recipe_update`)
                    .then(response=> response.data);

            return {
                type:'UPDATE_RECIPE',
                payload:request
            }
}

export function deleteRecipe(id) {
    const request = axios.delete(`/api/delete_recipe?id=${id}`)
                    .then(response => response.data)

                return{
                    type: 'DELETE_RECIPE',
                    payload:request
                }
}
export function clearRecipe(){
    return {
        type:'CLEAR_RECIPE',
        payload:{
            recipe:null,
            updateRecipe:false,
            recipeDeleted:false
        }
    }
}
export function loginUser ({email, password}) {
    const request = axios.post(`/api/login`, {email, password})
                    .then(response => response.data)
    
    return {
        type:'USER_LOGIN',
        payload: request
    }
}

export function auth() {
    const request =axios.get(`/api/auth`)
                    .then(response => response.data);

        return {
            type:'USER_AUTH',
            payload: request
        }
}
export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}


export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}