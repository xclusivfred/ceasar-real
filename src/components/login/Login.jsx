import React from 'react';
import { Link } from "react-router-dom";
import './login.css';
import image1 from "../../assets/frame-714@2x.png";


const Login = () => {

    return (
        <div>
            {/* <!-- sign in portal start --> */}
            <section className="login" id="login">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-8">
                            <div className="">
                                <div className="card-body">
                                    <img src={image1} height="147px" width="147px" className="img-fluid signin-img" alt='...' />
                                    <h1 className="text-center">Welcome back</h1>
                                    {/* <!-- beginning of form --> */}
                                    <form className="signin-form">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="emailInput" placeholder="Email"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-dark" type="submit">Log In</button>

                                        </div>
                                        <div className="forgot-password">
                                            <Link className="link-change" to={"/reset-password"}>Forgot your password?</Link><span className="span-right">
                                                <Link className="link-change" to={"/sign-up"}>Register now</Link></span>
                                        </div>
                                    </form>
                                    {/* <!-- end of form--> */}
                                </div>
                            </div>
                            <div className="help text-center">
                                <p className="p-help"><a href="/#" className="need-help link-change">Need help?</a> Contact us:</p>
                                <a className="link-change" href="/#">estacy@gmail.com</a>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
            {/* <!-- sign in portal end --> */}


        </div>
    );
}

export default Login;