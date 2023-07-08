import React from 'react';
import './reset-password.css';
import { Link } from "react-router-dom";



const ResetPassword = () => {

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
                                    <h1 className="text-center reset-text">Reset Password</h1>
                                    {/* <!-- beginning of form --> */}
                                    <form className="signin-form">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="emailInput" placeholder="Email"
                                                aria-describedby="emailHelp" />
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button className="btn btn-dark reset-btn" type="submit">Reset</button>

                                        </div>

                                    </form>
                                    {/* <!-- end of form--> */}
                                </div>
                            </div>
                            <div className="help text-center">
                                <Link className="link-change" to={"/login"}>Back</Link>
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

export default ResetPassword;