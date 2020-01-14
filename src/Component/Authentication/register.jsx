import React, { Component } from 'react';
import '../Authentication/login.css';
import AuthService from '../../Services/AuthService';

class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            role:'user'          
        }
    }
    onClose(e) {
        this.props.onRegisterClose();
    }
    showLoginModal = (e) => {
        this.props.onLoginShow();
    } 
    changeHandler = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value });
    }
    submitHandler = (e) =>{
        e.preventDefault(); // prevent to page refresh otherwise it reset empty state values     
        console.log(this.state);       
        AuthService.Register(this.state).then(res =>{
            console.log("--------- ", res);
        }).catch(err=>{
            console.log("err ", err)
        })  
    }
    render() {
        let showRegister = this.props.showRegister;
        if (!showRegister) {
            return null;
        }
        const { username, password } = this.state;
        return (
            <div className="bglogin">
                <div className="login">
                    <span onClick={e => { this.onClose(e); }} className="close">&times;</span>
                    <h2>Register </h2>
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
                            <button className="btn btn-primary" type="submit">
                                Register 
                            </button >                        
                            <a href="/#" className="nav-item nav-link" onClick={e => { this.showLoginModal(); }}>Login</a> 
                        </div >
                    </form>
                </div>
            </div>
        )
    }
}
export default Register;

// https://react-bootstrap.github.io/components/modal/