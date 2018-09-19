import React,  { Component } from 'react';
import '../styles.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email:'',
        username: '',
        password: '',
        passwordRepeat: '',
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
            passwordRepeat: this.state.passwordRepeat,
        }
    }

    render (){
        return(
        <section className="signuppage">
        <div className="signup">
            <form className= "signupform" >
                <h2> Sign up for an Account</h2>
                    <label> E-mail: 
                        <input 
                            type="email"
                            name= "email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder=" Email@example.com"/>
                    </label> 
                    <label> Username:
                        <input 
                            type="username"
                            name= "username"
                            value={this.state.username}
                            onChange={this.onChange}
                            placeholder=" Enter Username"/>
                    </label> 
                    <label> Password:
                        <input 
                            type="password"
                            name= "password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Enter Password"/>
                    </label> 
                    <label> Check Password:
                        <input 
                            type="password"
                            name= "passwordRepeat"
                            value={this.state.passwordRepeat}
                            onChange={this.onChange}
                            placeholder="Enter Password Again"/>
                    </label> 
                        <button onClick={this.handleSubmit}>Sign Up </button>
                <h6> Already have an account? <a href='/sign-in'> Sign In Now! </a> </h6>
            </form>
            </div>
        </section>
        )
    }
}

export default SignUp;