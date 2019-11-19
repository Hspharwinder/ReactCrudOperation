import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../Services/ApiService';


class AddUser extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            dept:'',
            email:'',
            designation:''
         }
    }   
    changeHandle = e =>{
        this.setState({ [e.target.id] : e.target.value })
    } 

    submitHandler = e=> {
        e.preventDefault(); // prevent to page refresh otherwise it reset empty state values
        ApiService.AddUser(this.state).then(msg => {
            console.log("Response : ", msg.data.res);
            this.props.history.push('/getUser');

        }).catch(err=>{
            console.log("err ", err)
        })
    }

    render(){
        const { name, dept, email, designation } = this.state
        return (
            <div className="container mt-5 border">                
                <h1><u>Add User Page</u></h1>
                <h3><Link to="/getUser">Go to home</Link></h3>
                <form onSubmit={this.submitHandler}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Email</th>
                                <th scope="col">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><input type="text" className="form-control"  value={name} onChange={this.changeHandle} id="name" /></th>
                                <td><input type="text" className="form-control" value={dept} onChange={this.changeHandle} id="dept" /></td>
                                <td><input type="text" className="form-control" value={email} onChange={this.changeHandle} id="email" /></td>
                                <td><input type="text" className="form-control" value={designation} onChange={this.changeHandle} id="designation" /></td>
                            </tr>
                        </tbody>
                    </table>   
                    <button type="submit" className="btn btn-primary float-right mb-5">Submit</button>
                </form>                         
            </div>
        )
    }
}

export default AddUser