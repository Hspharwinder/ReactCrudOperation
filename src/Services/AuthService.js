import axios from 'axios';

class AuthService{
    // isAuthenticated
    Register = (register) =>{
        return axios.post(`http://localhost:3000/auth/signup`, register)
    }
    Login = (login)=>{
        return axios.post(`http://localhost:3000/auth/login`, login)
    }
    currentUserValue(){
        return JSON.parse(localStorage.getItem("currentUser"));
    }
}

export default new AuthService();