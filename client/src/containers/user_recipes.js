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
                    <td>
                        <Link to={`/user/edit-recipe/${item._id}`}>
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
        console.log(user);
        return (
            <section className="user_recipes">
                <div className="user_recipes_nav">
                    <div className="ur_nav_item">
                        <Link to="/user"> back to dashboard </Link>
                    </div>
                    <div className="ur_nav_item">
                        <Link to="/user/add"> Add new recipe </Link>
                    </div>
                </div> 
                <div className="recipe-table">
                    <h4>{user.login.username}'s List of Recipes</h4>
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
            </section>
        );
    }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserRecipeList)