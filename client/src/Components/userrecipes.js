import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRecipes } from '../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';


class UserRecipes extends Component {

    componentWillMount() {
        this.props.disatch(getUserRecipes(this.props.user.login.id))
    }

    showUserRecipes =(user)=>{
        user.userRecipes ?
            user.userReipes.map(item => (
                <tr key={item._id}>
                <td><Link to ={
                    `user/edit-recipe/${item._id}`}
                    >
                    {item.name}</Link>
                    </td>
                <td>{moment(item.createAt).format("MM/DD/YY")}
                </td>
                </tr>
            ))
        :null
}
    render() {
        let user = this.props.user;
        return(
                <div>
                <h3>Your Recipes</h3>
                <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {this.showUserRecipes(user)}
                </tbody>
                </table>
                
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(UserRecipes);