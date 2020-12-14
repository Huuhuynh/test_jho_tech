import React, { Component } from 'react';
import './loginForm.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {
                email: '',
                password: '',
            },
            successMail: false,
            successPass: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email = (value === "jhotech@gmail.com.vn") ? "" : 
                    !validEmailRegex.test(value)
                        ? 'Email is not valid!'
                        : 'Password error' 
                break;
            case 'password':
                errors.password = (value === 'tech1234') ? "": value.length < 8
                    ? 'Password must be 8 characters long!'
                    : "Password error"

                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div id="loginStyle">
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' onChange={this.handleChange} noValidate />
                        {errors.email.length > 0 &&
                            <span className='error'>{errors.email}</span>}
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' onChange={this.handleChange} noValidate />
                        {errors.password.length > 0 &&
                            <span className='error'>{errors.password}</span>}
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                            <label class="custom-control-label" for="rememberPasswordCheck">Ghi nhớ tài khoản</label>
                            <label class="rePass" >Ghi nhớ tài khoản</label>
                        </div>
                    </div>
                    <div className='submit' >
                        <button data-dismiss={(errors.email === ""  && errors.password === "" )? "modal" : ""}>Đăng nhập</button>
                    </div>
                    <div className='info'>
                        <small>Cần trợ giúp?</small>
                    </div>
                </form>
            </div>
        );
    }
}
export { Register }