import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <div>
            <div className="page_loader"></div>

            <div className="login-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-inner-form">
                                <div className="logo-2">
                                    <a href="login-12.html">
                                        <img src="assets/auth/img/logos/logo.png" alt="logo" />
                                    </a>
                                </div>
                                <div className="details">
                                    <h3>Create an account</h3>
                                    <form action="#" method="GET">
                                        <div className="form-group form-box">
                                            <input type="text" name="fullname" className="input-text" placeholder="Full Name" />
                                            <i className="flaticon-user"></i>
                                        </div>
                                        <div className="form-group form-box">
                                            <input type="email" name="email" className="input-text" placeholder="Email Address" />
                                            <i className="flaticon-mail-2"></i>
                                        </div>
                                        <div className="form-group form-box">
                                            <input type="password" name="Password" className="input-text" placeholder="Password" />
                                            <i className="flaticon-password"></i>
                                        </div>
                                        <div className="checkbox clearfix">
                                            <div className="form-check checkbox-theme">
                                                <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                                <label className="form-check-label" for="rememberMe">
                                                    I agree to the<a href="#" className="terms">terms of service</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn-md btn-theme btn-block">Register</button>
                                        </div>
                                      
                                    </form>
                                </div>
                                <p>Already a member? <Link className="thembo" to="/login">Login here</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;