import React, { useState } from 'react'
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src="img/img-2.svg" alt=""
                    className="form-img"/>
                    </div>
                    {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
                    
            </div>

            

        </>
    )
}

export default Form;
