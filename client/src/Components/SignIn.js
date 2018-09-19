import React,  { Component } from 'react';
import '../styles.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
     };
        this.onChange =this.onChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
        }
    }

    render (){
        return(
        <section className="signinpage">
        <div className="signin">
            <form className= "signinform" >
                <h2> Sign into existing account</h2>
                    <label> Username :
                        <input 
                            type="username"
                            name= "username"
                            value={this.state.username}
                            onChange={this.onChange}
                            placeholder=" Enter Username"/>
                    </label> 
                    <label> Password :
                        <input 
                            type="password"
                            name= "password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Enter Password"/>
                    </label> 
                        <button onClick={this.handleSubmit}>Sign In </button>
                <h6> Don't have an account? <a href='/sign-up'> Sign Up today! </a> </h6>
            </form>
            </div>
        </section>
        )
    }
}

export default SignIn;