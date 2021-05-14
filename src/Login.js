import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <div className="page_loader"></div>

                <div className="login-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="login-inner-form">
                                    <div className="logo-2">
                                        <a href="login-12.html">
                                            <img src="assets/auth/img/logos/logo.png" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="details">
                                        <h3>Sign into your account</h3>
                                        <form action="#" method="GET">
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
                                                        Remember me
                                                    </label>
                                                </div>
                                                <a href="forgot-password-12.html">Forgot Password</a>
                                            </div>
                                            <div className="form-group mb-0">
                                                <button type="submit" className="btn-md btn-theme btn-block">Login</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <p>Don't have an account? <Link className="thembo" to="/register">Register here</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Login;