import React, { Component } from 'react';
import ApiService from '../Services/ApiService';
import { Link } from 'react-router-dom';
import Login from '../Component/Authentication/login';
import Register from '../Component/Authentication/register';
import Auth from '../Component/Authentication/authCheck';

class getUser extends Component{
    // constructor(props)
    constructor() { 
        super() //  super(props)       
        this.state = {
            user:[],
            err:'',
            showLogin: false,
            showRegister: false
        }             
    }
    // it execute once when component Mount in react life cycle after page rendering
    componentDidMount(){
        this.getUser();
        this.setState({ showLogin: Auth.getShowLogin() });
        // alert(this.state.showLogin);
    }
    getUser = () => {
        ApiService.GetUser().then(result => {  
            this.setState({ user: result.data });    
            // set value into local storage so that use again in edit user
            localStorage.setItem('AllUser', JSON.stringify(this.state.user));
            console.log("result ", result);  
        }).catch(error => {
            console.log(error);
            this.setState({err: 'Error reterving data :: ' + error})
        });
    } 
    addUserHandler = () => {
        this.props.history.push('/addUser');
    }
    deleteHandler(id){
        if (Auth.isAuthenticated()){
            ApiService.deleteUser(id).then(result => {
                console.log(result);
                this.getUser()
            }).catch(error => {
                console.log(error);
                this.setState({ err: 'Error reterving data :: ' + error })
            });
        }else{         
            // Auth.setRoute('/getUser');   
            this.showLoginModal();
        }
       
    }    
    editUserHandler(id){
        this.props.history.push('/editUser/' + id);
    }
    showLoginModal = e => {     
        this.setState({ showLogin: !this.state.showLogin }); 
        this.setState({ showRegister: false });
    }
    showRegisterModal = (e) => {        
        this.setState({ showLogin: false }); 
        this.setState({ showRegister: !this.state.showRegister });   
    }
    // redirect = (route) =>{
    //     route.preventDefault(); // prevent to page refresh otherwise it reset empty state values   
    //     // Auth.setRoute(route);
    //     this.props.history.push(route);
    // }
    render(){
        const { user, err } = this.state;
        return (
            <div className="container mt-5 border">                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to='/getUser'>Home</Link> <span className="sr-only">(current)</span>
                            <Link className="nav-item nav-link" to='/addUser' >Add User</Link>
                            {
                                Auth.authenticated ? '' : <span className="nav-item nav-link" onClick={e => { this.showLoginModal(); }}>Login</span>
                            }
                            {
                                !Auth.authenticated? '' : <span className="nav-item nav-link" onClick={e => { Auth.logOut(); }}>logOut</span>
                            }                        
                           
                            {/* <Link className="nav-item nav-link" to="/login" >Login</Link>  */}
                            <Link className="nav-item nav-link" to="/getUser"></Link>
                        </div>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                { 
                    // ternary operator ->  err ? <span></span> : <div></div> 
                    err ? <span>{err} </span> : 
                    <div>
                        {/* <button className="btn btn-primary" onClick={this.addUserHandler}>Add User</button><br /> */}
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Designation</th>   
                                    <th scope="col">Button</th>                         
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // ternary operator user.length ? user.map(...) : null
                                    user.length ? 
                                    user.map(data =>
                                        <tr key={data._id}>
                                            <th scope="row">{data.name}</th>
                                            <td>{data.dept}</td>
                                            <td>{data.email}</td>
                                            <td>{data.password}</td>
                                            <td>{data.designation}</td>
                                            <td>
                                                <button className="btn btn-primary  mr-1" onClick={() => this.editUserHandler(data._id)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteHandler(data._id)}>Delete</button>
                                            </td>
                                        </tr>   
                                    ):null
                                }                          
                            </tbody>
                        </table>  
                    </div>     
                }      
                {
                    Auth.isAuthenticated() ? '' : <Login onLoginClose={this.showLoginModal} showLogin={this.state.showLogin} onRegisterShow={this.showRegisterModal} />                                       
                }     
                {/* components for calling */}
                <Login onLoginClose={this.showLoginModal} showLogin={this.state.showLogin} onRegisterShow={this.showRegisterModal} />
                <Register onRegisterClose={this.showRegisterModal} showRegister={this.state.showRegister} onLoginShow={this.showLoginModal} />              
            </div>            
        )
    }
}
export default getUser;