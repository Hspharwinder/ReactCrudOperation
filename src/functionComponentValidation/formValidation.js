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

