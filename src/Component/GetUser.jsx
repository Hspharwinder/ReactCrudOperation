import React, { Component } from 'react';
import ApiService from '../Services/ApiService';

class getUser extends Component{
    // constructor(props)
    constructor() { 
        super() //  super(props)
        this.state = {
            user:[],
            err:'',
        }       
    }

    // it execute once when component Mount in react life cycle after page rendering
    componentDidMount(){
        this.getUser();
    }

    getUser = () => {
        ApiService.GetUser().then(result => {  
            this.setState({ user: result.data });    
            // set value into local storage so that use again in edit user
            localStorage.setItem('AllUser', JSON.stringify(this.state.user));
            console.log(result);  
        }).catch(error => {
            console.log(error);
            this.setState({err: 'Error reterving data :: ' + error})
        });
    } 
    addUserHandler = () => {
        this.props.history.push('/addUser');
    }
    deleteHandler(id){
        ApiService.deleteUser(id).then(result => {
            console.log(result);
            this.getUser()
        }).catch(error => {
            console.log(error);
            this.setState({ err: 'Error reterving data :: ' + error })
        });
    }
    
    editUserHandler(id){
        this.props.history.push('/editUser/' + id);
    }

    render(){
        const { user, err } = this.state;
        return (
            <div className="container mt-5 border">                               
                <h1>Get User Page</h1><br />
                { 
                    // ternary operator ->  err ? <span></span> : <div></div> 
                    err ? <span>{err} </span> : 
                    <div>
                        <button className="btn btn-primary" onClick={this.addUserHandler}>Add User</button><br />
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Email</th>
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
            </div>            
        )
    }
}
export default getUser;