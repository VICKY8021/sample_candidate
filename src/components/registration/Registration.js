import './Registration.css';
import { CardContent, Typography, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


const SignUp = () => {

    const initialvalues = { firstname: "", lastname: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    // const [passwordShow1, setPasswordShow1] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    }

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, []);
    // const textInput = React.useRef();

    const clearInput = () => (handleSubmit.current.value = "");

    const validate = (values) => {

        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!values.firstname) {
            errors.firstname = "Username is required";
        } else if (values.firstname.length < 4) {
            errors.firstname = "First Name must be more than  4 characters";
        } else if (values.firstname.length > 6) {
            errors.firstname = "Username can't  exceed   more than  6 characters";
        }
        if (!values.lastname) {
            errors.lastname = "Username is required";
        } else if (values.lastname.length < 4) {
            errors.lastname = "First Name must be more than  4 characters";
        } else if (values.lastname.length > 6) {
            errors.lastname = "Username can't  exceed   more than  6 characters";
        }
        if (!values.email) {
            errors.email = "email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not Valid Email";
        }
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than  4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password can't  exceed   more than  10 characters";
        }
        if (!values.confirm_password) {
            errors.confirm_password = "password is required";
        } else if (values.confirm_password.length < 4) {
            errors.password = "Password must be more than  4 characters";
        } else if (values.confirm_password.length > 10) {
            errors.confirm_password = "Password can't  exceed   more than  10 characters";
        } else if (values.password !== values.confirm_password) {
            errors.confirm_password = "Password Does Not Match!";

        }
        return errors;
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-popup-modal">
                {/* <Card> */}
                <div>
                    <CardContent>
                        <Typography className="Register-cps">Sign Up</Typography>
                        <TextField className="register_inputs"
                            label="First Name"
                            variant="outlined"
                            name="firstname"
                            required
                            value={formValues.firstname} onChange={handleChange}
                        />
                        <p style={{ color: 'red' }}>{formErrors.firstname}</p>

                        <TextField className="register_inputs"
                            label="Last Name"
                            variant="outlined"
                            name="lastname"
                            required
                            value={formValues.lastname} onChange={handleChange}
                        />
                        <p style={{ color: 'red' }}>{formErrors.lastname}</p>

                        <TextField className="register_inputs"
                            label="Email"
                            variant="outlined"
                            required
                            name="email"
                            value={formValues.email} onChange={handleChange}
                        />
                        <p style={{ color: 'red' }}>{formErrors.email}</p>

                        <TextField className="register_inputs"
                            label="Password"
                            variant="outlined"
                            required
                            name="password"
                            type={passwordShow ? "text" : "password"}
                            value={formValues.password} onChange={handleChange}
                        />
                        <i id="showHidePwd" className={`far ${passwordShow ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisiblity}></i>
                        <p style={{ color: 'red' }}>{formErrors.password}</p>
                        <TextField className="register_inputs"
                            label="Confirm Password "
                            variant="outlined"
                            name="confirm_password"
                            type="password"
                            required
                            value={formValues.confirm_password} onChange={handleChange}
                        />
                        {/* <i id="showHidePwd" className={`far ${passwordShow1 ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisiblity1}></i> */}
                        <p style={{ color: 'red' }}>{formErrors.confirm_password}</p>
                        <div className='buttonrow'>
                            <button type="submit" variant="contained" className='mybutton2'>
                                Sign UP
                            </button>
                            <button type="submit" onClick={clearInput} variant="contained" className='mybutton'>
                                Reset
                            </button>
                        </div>
                    </CardContent>
                </div>
                {/* </Card> */}
            </div>
        </form >
    );
}

export default SignUp;