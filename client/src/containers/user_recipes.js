import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRecipes } from '../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserRecipeList extends Component {

    componentWillMount(){
        this.props.dispatch(getUserRecipes(this.props.user.login.id))
    }

    showUserPosts = (user) => (
        user.userRecipes ? 
            user.userRecipes.map(item => (
                <tr key={item._id}>
                    <td><Link to={
                        `/user/edit-recipe/${item._id}`
                    }>
                        {item.name}
                    </Link></td>
                    
                    <td>
                        {moment(item.createAt).format("MM/DD/YY")}
                    </td>
                </tr>
            ))
        :null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="user_recipes">

                <h4>Your Recipes:</h4>
                <Link to="/user/add"> Add new recipe </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserRecipeList)