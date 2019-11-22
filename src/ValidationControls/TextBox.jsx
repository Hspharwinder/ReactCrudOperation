import React, { Component } from 'react';
import { Textbox } from 'react-inputs-validation';

class ValidTextBox extends Component {

    constructor(props) {
        super(props)
        this.fields = {
            value:''
        }
    }
    render(){
        const { value } = this.fields;
        return (         
            <div id="name"> 
                <Textbox 
                    tabIndex="name" // Optional.[String or Number].Default: none.                    
                    name="abc" // Optional.[String].Default: "". Input name.
                    type="text" // Optional.[String].Default: "text". Input type [text, password, number].
                    value={value} // Optional.[String].Default: "".
                    placeholder="Place your name here ^-^" // Optional.[String].Default: "".
                    id='Name' // Optional.[String].Default: "".  Input ID.
                    className="form-control"
                    onChange={(name, e) => {
                        this.props.name(name, this.props.passId);
                        
                    }} // Required.[Func].Default: () => {}. Will return the value.
                    onBlur={(e) => { console.log(e); }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                    validationOption={{
                        name: 'name', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                    }}
                />
            </div>               
        )
    }
}

export default ValidTextBox;
