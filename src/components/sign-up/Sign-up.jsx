import React from 'react';
import './sign-up.css';
import { Link } from "react-router-dom";


const SignUp = () => {

    return (
        <div>
            {/* <!-- register portal start --> */}

            <div className='row'>
                <div className='col-md-7'>
                    <section className="signup">
                        <div className="container">
                            <h1>Estacy</h1>
                            <h6>Join over 70,000 investors</h6>
                            <p>invest with your head and your heart</p>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name="First Name" className="form-control" placeholder="First Name*"
                                        required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="Last Name" className="form-control" placeholder="Last Name*"
                                        required />
                                </div>
                                <div className="col-12">
                                    <input type="email" name="Message Heading" className="form-control" placeholder="Email*"
                                        required />
                                </div>

                                <div className="col-md-6">
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option selected>Australia +61</option>
                                        <option value="1">one</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" name="Message Heading" className="form-control" placeholder="Mobile*"
                                        required />
                                </div>

                                <div className="col-12">
                                    <input type="password" name="Message Heading" className="form-control" placeholder="Password"
                                        required />
                                </div>

                                <div className="col-12">
                                    <input type="password" name="Message Heading" className="form-control" placeholder="Confirm Password*"
                                        required />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        I have read and agree to estacy's<a className='login-link' href="/#"> terms and conditions.</a>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        I agree to received communications from estacy. I understand I can unsubscribe at any time
                                    </label>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-dark" type="submit">Register today for free</button>

                                </div>

                                <div className='row create-acct'>
                                    <div className='col-md-6'>
                                        <div className="text-center">
                                            <p className='p-text-upper'>it's fast and easy</p>
                                            <p className='p-no-hidden-fee'>No hidden fees</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="text-center">
                                            <p className='p-text'>Already have an accout?</p>
                                            <Link className='login-link' to={"/login"}>Login here</Link>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <div className='col-md-5'>
                    <section className="light">
                        <div className="container">
                            <div className="row">
                                <div className="col-"></div>
                                <div className="col-md-10">
                                    <div className="card signup signup-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title mb-2">Card subtitle</h6>
                                            <h6 className="card-title mb-2">Card subtitle</h6>
                                            <p className="card-title mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-"></div>

                            </div>
                            <div className="row">
                                <div className="col-"></div>

                                <div className="col-md-10">
                                    <div className="card signup-card">
                                        <div className="card-body">
                                            <h6 className="card-subtitle mb-2">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-"></div>

                            </div>
                            <div className="row">
                                <div className="col-"></div>
                                <div className="col-md-10">
                                    <div className="card signup-card">
                                        <div className="card-body">
                                            <h6 className="card-subtitle mb-2">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-"></div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>








            {/* <!-- register portal end --> */}


        </div>
    );
}

export default SignUp;