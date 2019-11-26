import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../Services/ApiService';
import { validateEmail, validateText, validateCheckBoxList} from '../functionComponentValidation/formValidation';

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            dept:'',
            email:'',
            designation:[],
            password:''        
        }
        this.deptList = [
            { depId: '1', deptName: 'MEAN' },
            { depId: '2', deptName: 'MERN' },
            { depId: '3', deptName: 'MEVN' },
            { depId: '4', deptName: 'DOT NET' },
            { depId: '5', deptName: 'PHP' },
        ]
        this.designationList = [
            { Id: '1', Name: 'DR' },
            { Id: '2', Name: 'Manager' },
            { Id: '3', Name: 'Asst. Manager' },
            { Id: '4', Name: 'TL' },
            { Id: '5', Name: 'Trainee' },
        ]
        this.isSubmitValid = false;
        this.selectedItem = [];
        this.checkBoxSelected = [];
        this.validate = {  }

    }   
    changeHandler = (e) =>{
        const eventValues = this.setEventValues(e);       
        this.Validation(eventValues);   
    } 

    setEventValues(e){
        return {
            id: e.target.id,
            value: e.target.value,
            type: e.target.type,
            index: e.target.selectedIndex,
        }
    }

    onDropdownSelected = (e) => {
        const checked = e.target.value; 
        
        const eventValues = this.setEventValues(e);    
        console.log("checked val  ", {...eventValues});
        if(eventValues.index !== 0)
            this.state.dept = checked;  
        // this.setState(prevState => ({ ...prevState, dept: "checked" }), ()=>{
            console.log("checked ========  ", this.state);
        // });
        
        // check validation
        this.Validation(eventValues);
        
        let arr = this.deptList;
        //here you will see the current selected value of the select input
        arr = arr.map((key) => {
            key.checked = key.deptName === checked ? true : false;
            return key;
        })
        this.selectedItem = arr;
    }

    onCheckBoxSelected = e => {
        const checked = e.target.value;

        let arr = this.designationList;
        //here you will see the current selected value of the select input
        arr = arr.map((key) => {
            if(key.Name === checked && key.checked){
                key.checked = false;
            }
            else if(key.Name === checked){
                key.checked = true;
            }
            else if(key.checked)   
                key.checked = true;
            else 
                key.checked = false;
            return key;
        })
        this.checkBoxSelected = arr;        
        //call for validation
        const eventValues = this.setEventValues(e);
        // check validation
        this.Validation(eventValues);
    }

    onBlur = (e) => {
        const eventValues = this.setEventValues(e);
        // check validation
        this.Validation(eventValues); 
    }

    submitHandler = e=> {
        e.preventDefault(); // prevent to page refresh otherwise it reset empty state values    
            
        // ApiService.AddUser(this.state).then(msg => {
        //     console.log("Response : ", msg.data.res);
        //     this.props.history.push('/getUser');

        // }).catch(err=>{
        //     console.log("err ", err)
        // })
    }
    
    getName = (value, id) => {
        this.setState({ [id] : value }) // dynamic value [id], static id
        console.log("Child to parent  ", value, id);
        console.log("Child to parent state :: ", this.state.name);
    }

    Validation = (e) => {        
        const id = e.id;
        const value = e.value;
        const type = e.type;
        const index = e.index;
        this.setState({ [id]: value });
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
            // case id === "name" || type === "text": {
            //     valid[id].v_msg = validateText(value);
            //     break;
            // }

            // case id === "password" || type === "password": {
            //     valid.v_msg = validateText(value);
            //     break;
            // }
            case id === "matchPassword" || type === "matchPassword" : {
                valid[v_id].v_msg = validateText(value);
                break;
            }
            case id === "dept": {
                valid[v_id].v_msg = index === 0 ? 'required' : '';
                this.setState({dept:''})
                break;
            }
            case id === "designation" || type === 'checkbox': {
                valid[v_id].v_msg = validateCheckBoxList(this.checkBoxSelected);
                break;
            }
            // required validation
            case type === "text" : {
                valid[v_id].v_msg = validateText(value);
                break;
            }            
            default : {
                break;
            }            
        }    
        
        this.isSubmitValid = this.submitValidation();
    }  

    submitValidation(){
        let isValid = true;
        console.log("this.state ", this.state);
        Object.values(this.state).map((value)=> {
            console.log("submit button ", value);
            if(!value)
                isValid = false;
       });
        if ('required' === validateCheckBoxList(this.checkBoxSelected))
            isValid = false;

        return isValid;
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
                                    <select name="dept" className="form-control" 
                                        onChange={this.onDropdownSelected}  id="dept" 
                                    >
                                        <option value="select">select</option>
                                        {this.deptList.map((e, key) => {
                                            return <option key={key} value={e.Name}>{e.deptName}</option>;
                                        })}
                                    </select>
                                    {/* <input type="text" className="form-control" value={dept} 
                                        onChange={this.changeHandler} onBlur={this.onBlur} id="dept" 
                                    /> */}
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
                               
                            </tr>
                            <tr className="thead-dark">
                                <th scope="col">Designation</th>
                                <th scope="col">Gender</th>
                            </tr>
                            <tr>
                                <td>
                                    {this.designationList.map((e, key) => {
                                        return <span key={key}> <input type="checkbox" value={e.Name} className="col-3" 
                                            onChange={this.onCheckBoxSelected} id="designation"
                                        /> {e.Name} </span>;
                                    })}

                                    {/* <input type="text" className="form-control" value={designation}
                                        onChange={this.changeHandler} id="designation" onBlur={this.onBlur}
                                    /> */}
                                    {(v_designation  && v_designation.v_msg) ? (<p className="text-danger">{v_designation.v_msg}</p>) : ''}
                                </td>
                                <td className="radio">
                                    <input type="radio" className="col-6" value="male" name="optradio" />Male
                                    <input type="radio" className="col-6" value="female" name="optradio" />Female
                                </td>
                            </tr>                       
                        </tbody>
                    </table>   
                    <button type="submit" disabled={!this.isSubmitValid} className="btn btn-primary float-right mb-5">Submit</button>
                </form>                                                
            </div>
        )
    }
}

export default AddUser