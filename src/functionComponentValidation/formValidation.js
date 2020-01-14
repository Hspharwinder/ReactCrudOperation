export const validateEmail = (values) => {
    let errors = '';
    if (!values) {
        errors = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values)) {
        errors = 'Email address is invalid';
    }
    return errors;
};
 
export const validateText = (values) => {
    let errors = '';
    if (!values) {
        errors = 'required';
    } 
    return errors;
};

export const validateCheckBoxList = (arr) =>{
    let valid = false;
    let errors = '';
    // set valid true if any checkbox checked
    arr.forEach((key) => {
        if (key.checked)
            valid = true;
    });
    // if valid is false, it mean no checkbox selected so return validation error
    if(!valid)
        errors = 'required';
    
    return errors;

}
