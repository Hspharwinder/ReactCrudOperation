import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../Services/ApiService';
import {validateEmail, validateText} from '../functionComponentValidation/formValidation';

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            dept:'',
            email:'',
            designation:'',
            password:'',          
        }
        this.validate = {   }

    }   
    changeHandler = (e) =>{
        console.log(e);
        this.setStateAsync(e);       
    } 
    onBlur = (e) => {
        this.setStateAsync(e);   
    }
    setStateAsync =  (e) => {
        const id = [e.target.id];
        const value = e.target.value;
        this.setState({ [id]: value })
        this.Validation(e);
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
    
    getName = (value, id) => {
        this.setState({ [id] : value }) // dynamic value [id], static id
        console.log("Child to parent  ", value, id);
        console.log("Child to parent state :: ", this.state.name);
    }

    Validation = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const type = e.target.type;
        //  creating dynamic object for validation
        let valid = this.validate;
        let v_id = "v_" + id;
        valid[v_id] = { touched : true}; // insert new key and value into dynamic object 
        // valid[v_id].touched = true;   // also set value like this

        switch(true){
            case id === 'email' || type === "email": {
                valid[v_id] = { v_msg: validateEmail(value) }
                // valid[v_id].v_msg = validateEmail(value);  // also set value like this
                break;
            }
            case id === "phone" || type === "phone": {
                valid[v_id].v_msg = validateText(value);
                break;
            }
            // case id === "password" || type === "password": {
            //     valid.v_msg = validateText(value);
            //     break;
            // }
            case id === "matchPassword" || type === "matchPassword" : {
                valid[v_id].v_msg = validateText(value);
                break;
            }
            // case id === "name" || type === "text": {
            //     valid[id].v_msg = validateText(value);
            //     break;
            // }

            // required validation
            case type === "text" : {
                valid[v_id].v_msg = validateText(value);
                break;
            }
            default : {
                break;
            }
        }           
    }

    render(){
        const { name, dept, email, password, designation } = this.state;  
        const { v_name, v_dept, v_email, v_password, v_designation } = this.validate;
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
                                <th scope="col">Password</th>
                                <th scope="col">Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <input type="text" className="form-control"  
                                        value={name} onChange={this.changeHandler} id="name" 
                                        onBlur={this.onBlur}
                                    />    
                                    {(v_name && v_name.touched && v_name.v_msg) ? (<p className="text-danger">{v_name.v_msg}</p>) : ''}                         
                                </th>
                                <td>
                                    <input type="text" className="form-control" value={dept} 
                                        onChange={this.changeHandler} onBlur={this.onBlur} id="dept" 
                                    />
                                    {v_dept && v_dept.v_msg ? (<p className="text-danger">{v_dept.v_msg}</p>) : ''}  
                                                                         
                                </td>
                                <td>
                                    <input type="text" className="form-control" value={email} 
                                    onChange={this.changeHandler} id="email" 
                                        onBlur={this.onBlur}
                                    />
                                    {v_email ? (<p className="text-danger">{v_email.v_msg}</p>):''}      
                                </td>
                                <td>
                                    <input type="text" className="form-control" value={password} 
                                        onChange={this.changeHandler} id="password" onBlur={this.onBlur}
                                    />
                                    {(v_password && v_password.touched && v_password.v_msg) ? (<p className="text-danger">{v_password.v_msg}</p>) : ''}  
                                </td>
                                <td>
                                    <input type="text" className="form-control" value={designation}
                                        onChange={this.changeHandler} id="designation" onBlur={this.onBlur}
                                    />
                                    {(v_designation && v_designation.touched && v_designation.v_msg) ? (<p className="text-danger">{v_designation.v_msg}</p>) : ''}   
                                </td>
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