import React, { Component } from 'react';
import '../Authentication/login.css';
import AuthService from '../../Services/AuthService';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import Auth from '../Authentication/authCheck';

class Login extends Component {
    constructor(props) {
        super(props);
        this.isAuthenticate = false;
        this.state = {
            username: '',
            password: '',
            role: 'User'
        }
    }
    onClose(e){               
        this.props.onLoginClose();
    }
    showRegisterModal = (e) => {
        this.props.onRegisterShow();
    }  
    changeHandler = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value });
    } 
    submitHandler = (e) =>{
        e.preventDefault(); // prevent to page refresh otherwise it reset empty state values   
        AuthService.Login(this.state).then(res => {       
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            Auth.logIn(() => {
                // let url = Auth.getRoute();
                this.props.history.push(`/addUser`);
            });                          
        }).catch(err => {
            alert("!! invalid Auth !!");
            console.log("err ", err)
        })  
    }
    render() {
        let showLogin = this.props.showLogin;
        if (!showLogin) {
            return null;
        }  
        const { username, password } = this.state;   
        let isAuth = this.isAuthenticate;   
        return (    
            <div>
                {isAuth ? <Redirect to={{ pathname: '/addUser' }} /> : <div className="bglogin">
                    <div className="login">
                        <span onClick={e => { this.onClose(e); }} className="close">&times;</span>
                        <h2>Login </h2>
                        {/* <button onClick={e => { this.onClose(e); }} >
                        Close
                    </button> */}
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text" className="form-control"
                                    value={username} id="username"
                                    onChange={this.changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password" className="form-control"
                                    value={password} id="password"
                                    onChange={this.changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">
                                    {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
                                    Login
                            </button >
                                <span  className="nav-item nav-link" onClick={e => { this.showRegisterModal(); }}>Register</span>
                            </div>

                        </form>
                    </div>
                </div>   }
                
            </div>     
        )
    }
}
export default withRouter(Login);

// withRouter(login) -- here, login component wrapping in withRouter, by wrapping login compoent,login is able to access all props like match,location,history