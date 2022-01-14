import React, { useState, useEffect } from 'react';
import { Typography, Paper, TextField, Button, Grid, Box, FormControlLabel, Checkbox, CssBaseline } from '@material-ui/core';
import './Login.scss';

const Login = () => {
    const initialvalues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

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


    const validate = (values) => {

        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
            errors.password = "Password cannot  exceed   more than  10 characters";
        }

        return errors;
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container component="main" justifyContent='center' className='main_form'>
                <CssBaseline />
                <Grid item component={Paper} elevation={4} className='login_box'>
                    <Box className='login_box_in'
                        sx={{
                            my: 3,
                            mx: 3,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h6">Login</Typography>
                        <Box component="form-data">
                            <TextField
                                margin="normal"

                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                className='form-control'
                                value={formValues.email} onChange={handleChange}
                            />
                            <p style={{ color: 'red' }}>{formErrors.email}</p>
                            <div style={{ display:'flex'}}>
                            <TextField
                                margin="normal"

                                fullWidth
                                name="password"
                                label="Password"
                                id="password"
                                autoComplete="current-password"
                                className='form-control'
                                type={passwordShow ? "text" : "password"}
                                value={formValues.password} onChange={handleChange}
                            />
                            <i id="showHidePwd" className={`far ${passwordShow ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisiblity}></i>
                            </div>
                            <p style={{ color: 'red' }}>{formErrors.password}</p>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                className='check_label'
                            />
                            <Button
                                type="submit"
                                fullWidth
                                onSubmit={handleSubmit}
                                variant="contained"
                                className='signin_btn'
                            >
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
}

export default Login;