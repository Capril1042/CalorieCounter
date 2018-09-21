import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions'

class Login extends Component {
    render () {
        return (
            <div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Login)