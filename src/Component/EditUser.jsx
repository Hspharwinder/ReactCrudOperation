import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../Services/ApiService';


class editUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user:[{
                name: '',
                dept: '',
                email: '',
                password:'',
                designation: ''
            }]       
        }
        // alert(this.props.match.params.id);
    }

    // it execute once when component Mount in react life cycle after page rendering
    componentDidMount() {
        this.getUser();
    }

    changeHandler = e => {
        let key = e.target.id; 
        let value = e.target.value;
        let arr = this.state.user[0];
        arr[key] = value; // for static --> arr.email       
        arr.filePath = ''; 
        this.setState(arr)
    }

    getUser = () => {    
        const id = this.props.match.params.id;
        let locValue = JSON.parse(localStorage.getItem('AllUser'));   
        locValue = locValue.filter(x => x._id === id);
        this.setState({ user: locValue });
        console.log("this.setState  ", this.setState.user );
    } 

    submitHandler = e => {
        e.preventDefault(); // prevent to page refresh otherwise it reset empty state values
        ApiService.EditUser(this.state.user[0]).then(msg => {
            console.log("Response : ", msg.data.res);
            this.props.history.push('/getUser');
        }).catch(err => {
            console.log("err ", err)
        })
    }

    render() {
        const { name, dept, email, password, designation } = this.state.user[0];
        return (
            <div className="container mt-5 border">
                <h1><u>Edit User Page</u></h1>
                <h3><Link to="/getUser">Go to home</Link></h3>
                <form onSubmit={this.submitHandler}>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><input type="text" className="form-control" value={name} onChange={this.changeHandler} id="name" /></th>
                                <td><input type="text" className="form-control" value={dept} onChange={this.changeHandler} id="dept" /></td>
                                <td><input type="text" className="form-control" value={email} onChange={this.changeHandler} id="email" /></td>
                                <td><input type="text" className="form-control" value={password} onChange={this.changeHandler} id="password" /></td>
                                <td><input type="text" className="form-control" value={designation} onChange={this.changeHandler} id="designation" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary float-right mb-5">Submit</button>
                </form>
            </div>
        )
    }
}

export default editUser