import React,  { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegister} from '../actions';
import '../styles.css';

class SignUp extends PureComponent {
    
        state = {
        email:'',
        username: '',
        password: '',
        error:''
    
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

     handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    } 
    handleInputPassword= (event) => {
        this.setState({password:event.target.value})
    } 
    handleInputName = (event) => {
        this.setState({username:event.target.value})
    } 

    componentWillReceiveProps(nextProps){
        if(nextProps.user.register === false){
            this.setState({error:'Error,try again'})
        } else{
            this.setState({
                username:'',
                email:'',
                password:''
            })
        }
    }


   
    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});

        this.props.dispatch(userRegister({
            email:this.state.email,
            password:this.state.password,
           username:this.state.username
        },this.props.user.users))
        
    }

    render (){
        let user = this.props.user
        return(
        <section className="signuppage">
            <div className="signup">
                <form  onSubmit={this.submitForm} className= "signupform" >
                <h2> Sign up for an Account</h2>
                    <label> E-mail: 
                        <input 
                            type="email"
                            name= "email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                            placeholder=" Email@example.com"/>
                    </label> 
                    <label> Username:
                        <input 
                            type="username"
                            name= "username"
                            value={this.state.username}
                            onChange={this.handleInputName}
                            placeholder=" Enter Username"/>
                    </label> 
                    <label> Password:
                        <input 
                            type="password"
                            name= "password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                            placeholder="Enter Password"/>
                    </label> 
                    
                        <button type="submit">Sign Up </button>
                        <div className="error">
                        {this.state.error}
                    </div>
                <h6> Already have an account? <a href='/signin'> Sign In Now! </a> </h6>
            </form>
            </div>
        </section>
        )
    }
}

function mapStateToProps(state){
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(SignUp);