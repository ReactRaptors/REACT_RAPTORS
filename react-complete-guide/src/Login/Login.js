import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailVal : "",
            passwordVal : ""
        }
        this.submitHandler=this.submitHandler.bind(this);
        this.registerHandler=this.registerHandler.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
       }
    


    submitHandler(event){
        console.log("in submit", event);
    }
    registerHandler(event){
        console.log("in regsiter", event);
    }
    changeHandler(event){
        console.log("key>> "+event.target.className);
        console.log("value>> "+event.target.value);
        this.setState({
            [event.target.className] : event.target.value})
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={this.submitHandler}>
                    <div className="email">
                        <label>Email: </label>
                        <input className="emailVal"
                            autoFocus 
                            type="text"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="password">
                        <label>Password: </label>
                        <input className="passwordVal"
                            type="text"
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className = "loginButtons">
                    <input className="submit" type="submit" value="Signin"/>
                    <input className="submit" type="submit" value="Register" onClick={this.registerHandler}/></div>
                </form>
            </div>
        );
    }
}

export default Login;