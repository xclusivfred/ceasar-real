import React from 'react';
import { Link } from "react-router-dom";
import './home.css';
import image1 from "../../assets/tv.png";

const Home = () => {

    return (
        <div>

            {/* <!--nav start--> */}

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand li-shift" href="/#">Estacy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item li-shift">
                                <a className="nav-link" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item li-shift">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item li-shift dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Property
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Property</a></li>
                                    <li><a className="dropdown-item" href="/#">Property 2</a></li>

                                    <li><a className="dropdown-item" href="/#">Property 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item li-shift">
                                <a href='#footer' className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success me-2 li-shift nav-btn" type="submit"><Link className="nav-link" to={"/login"}>Login</Link>
                            </button>

                            <button className="btn btn-outline-success nav-btn" type="submit"><Link className="nav-link" to={"/sign-up"}>Register</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Estacy</a>
                    <button className="navbar-toggler nav-toggle-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Property</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Property 1</a></li>
                                    <li><a className="dropdown-item" href="/#">Property 2</a></li>
                                    <li><a className="dropdown-item" href="/#">Property 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Register</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            {/* <!--nav end--> */}

            {/* <!--hero section dark start--> */}
            <section className="hero" id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-10">
                            <h2>Shock the system</h2>
                            <p>invest proud with a crowd of investors, all in it for impact</p>
                            <button type="button" className="btn btn-dark">Book a call</button>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
            {/* <!--hero section dark end--> */}

            {/* <!--secrion light start--> */}
            <section className="light" id='about'>
                <div className="container">
                    <div className="row row-label">
                        <div className="col"></div>
                        <div className="col-md-8 text-center">
                            <h2 className="label-text">Leveraging the power of crowdfunding for investments that back a better future</h2>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className='row text-center about-row'>
                        <div className='col-md-4'>
                            <h2>72,000</h2>
                            <p>Total members</p>
                        </div>
                        <div className='col-md-4'>
                            <h2>$275,000,000</h2>
                            <p>Total Raised</p>
                        </div>
                        <div className='col-md-4'>
                            <h2>$20,000,000</h2>
                            <p>Distributed to investors</p>
                        </div>
                    </div>


                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row row-label">
                        <div className="col"></div>
                        <div className="col-md-6 text-center">
                            <h1 className="label-text">Successful Deals</h1>
                        </div>
                        <div className="col"></div>
                    </div>

                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row row-cards">
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 row-cards">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center list-header">Retail</li>
                                </ul>
                                <img src={image1} className="img-fluid" alt="..." />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-center">Invest</li>
                                </ul>
                                <div className="card-body text-center">
                                    <p className="card-text">With supporting text.</p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-dark" type="button">View offer</button>
                                    </div>
                                    <p className="p-text">Tech</p>
                                    <h6>Special title treatment</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row row-label">
                        <div className="col"></div>
                        <div className="col-md-6 text-center">
                            <button type="button" className="btn btn-dark">show more</button>
                        </div>
                        <div className="col"></div>
                    </div>



                </div>

            </section>
            {/* <!--section light end--> */}
            {/* <!--footer start--> */}
            <section className="footer" id='footer'>
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-md-3 footsy">
                            <h1>company</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Legals</li>
                            </ul>
                        </div>
                        <div className="col-md-3 footsy">
                            <h1>Get Started</h1>
                            <ul>
                                <li>Invest</li>
                                <li>Raise</li>
                                <li>Manage</li>
                                <li>Property</li>
                            </ul>
                        </div>
                        <div className="col-md-3 footsy">
                            <h1>Learn</h1>
                            <ul>
                                <li>How it works</li>
                                <li>FAQs</li>
                                <li>Investor education</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="col-md-3 footsy">
                            <h1>My Account</h1>
                            <ul>
                                <li><Link className="footer-link" to={"/login"}>Login</Link></li>
                                <li><Link className="footer-link" to={"/sign-up"}>Register</Link></li>
                                <li><Link className="footer-link" to={"/reset-password"}>Forgot Password</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Estacy</h4>

                            <p>&copy;
                                <script>document.write(new Date().getFullYear());</script> | All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <a className="contact-link" href="/#">Facebook</a>
                            <a className="contact-link" href="/#">Instagram</a>
                            <a className="contact-link" href="/#">Linkedin</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!--footer end--> */}


        </div>
    );
}

export default Home
    ;