import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
export function validateQuickSignUp(data){
    console.log("coming to here");
    
    let errors = {};
   
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invlalid';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'This field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(Validator.isEmpty(data.passwordConfirmation)){
            errors.passwordConfirmation = 'This field is required';
        }
    if(!Validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = 'Passwords must match';
    }
    console.log(errors);
    return{
        errors,
        isValid:isEmpty(errors)
    }
}
export function validateFormalSignUp(data){
    console.log("coming to validation");
    
    let errors = {};
    // if(Validator.isEmpty(data.title)){
    //     errors.title = 'This field is required';
    // }
    if(Validator.isEmpty(data.firstname)){
        errors.firstname = 'This field is required';
    }
    if(Validator.isEmpty(data.lastname)){
        errors.lastname = 'This field is required';
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invlalid';
    }
    if(Validator.isEmpty(data.email)){
        errors.email = 'This field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(Validator.isEmpty(data.passwordConfirmation)){
            errors.passwordConfirmation = 'This field is required';
    }
    if(!Validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = 'Passwords must match';
    }
    if(Validator.isEmpty(data.contactNumber)){
        errors.contactNumber = 'This field is required';
    }
    // if(Validator.isEmpty(data.dob)){
    //     errors.dob = 'This field is required';
    // }
    if(Validator.isEmpty(data.city)){
        errors.city = 'This field is required';
    }
    if(Validator.isEmpty(data.nic)){
        errors.nic = 'This field is required';
    }
    if(Validator.isEmpty(data.district)){
        errors.district = 'This field is required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    console.log(errors);
    return{
        errors,
        isValid:isEmpty(errors)
    }
}