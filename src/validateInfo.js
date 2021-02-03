export default function validateInfo(values){
    let errors = {}
    if(!values.username.trim()){
        errors.username = "Username required!";
    }

    if(!values.email){
        errors.email = "E-mail required!"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "E-mail address is invalid!";
    }
    if(!values.password){
        errors.password = "Password is required!";
    }else if(values.password.length < 6){
        errors.password = "password needs to be 6 characters or more!";
    }

    if(!values.password2){
        errors.password2 = "password is required!";
    }else if(password2.value !== password.value){
        errors.password2 = "password do not match!"
    }

    return errors;

}