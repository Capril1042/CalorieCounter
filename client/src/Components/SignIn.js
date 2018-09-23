import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions'

import '../styles.css';

class SignIn extends Component {
  
        state = {
        email: '',
        password: '',
        error:'',
        success: false
     }
    

    onChangeEmail= (event)=>{
        this.setState({ email:event.target.value})
    }

    onChangePassword=(event)=> {
        this.setState({password:event.target.value})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.login.isAuth) {
            this.props.history.push('/user')
        }
    }
   

    submitForm =(e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))

    }

    render (){
        let user =this.props.user;
        return(
        <section className="signinpage">
            <div className="signin">
                <form  onSubmit={this.submitForm} className= "signinform" >
                    <h2> Sign into existing account</h2>
                        <input 
                            type="email"
                            name= "email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            placeholder="Enter Email"
                        />
                        <input 
                            type="password"
                            name= "password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Enter Password"
                        />
                        <button type="submit">Sign In </button>
                    <h6> 
                        Don't have an account? 
                            <a href='/signup'> 
                                Sign Up today! 
                            </a> 
                    </h6>
                    <div>
                        {user.login ?
                            <div>
                                {user.login.message}
                            </div> 
                        :null
                    }
                    </div>
                </form>
            </div>
        </section>
        );
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(SignIn)