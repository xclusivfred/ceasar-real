import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './dashboard.css';
import image1 from "../../assets/tv.png";
import image3 from "../../assets/group-773@2x.png";
import image5 from "../../assets/frame-71@2x.png";
import image6 from "../../assets/frame-711@2x.png";
import image7 from "../../assets/frame-712@2x.png";





// import { Link } from "react-router-dom";


const Dashboard = () => {
    const [style, setStyle] = useState("navbar-nav sidebar sidebar-light accordion");

    const changeStyle1 = () => {
        if (style === "navbar-nav  sidebar sidebar-light accordion") {
            setStyle("navbar-nav  sidebar sidebar-light accordion toggled1");
        }
        else {
            setStyle("navbar-nav  sidebar sidebar-light accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center sidebar-background" href="/#">
                            <div className="sidebar-brand-icon">
                                <h4 class>Estacy</h4>
                            </div>
                        </a>

                        {/*  <!-- Nav Item - Dashboard --> */}

                        {/* <!-- Nav Item - 0verview, all admins, etc --> */}

                        <li className="nav-item list-item">
                            <a className="nav-link" href="/dashboard">
                                <img src={image5} className="links" alt="..." />
                                <span>My Portfolio</span></a>
                        </li>
                        <li className="nav-item list-item">
                            <a className="nav-link" href="/#">
                                <img src={image6} className="links" alt="..." />
                                <span>My Profile</span></a>
                        </li>
                        <li className="nav-item list-item">
                            <a className="nav-link" href="/#">
                                <img src={image7} className="links" alt="..." />
                                <span>MY entities</span></a>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link">
                                <button className="btn btn-dark btn-logout" type="button">Logout</button>
                            </div>
                            {/* <div className="d-grid gap-2">
                                <button className="btn btn-dark btn-logout" type="submit">Logout</button>

                            </div> */}
                        </li>


                        {/*  <!-- End of Nav Item - 0verview, all admins, etc --> */}
                    </ul>
                    {/*  <!-- End of Sidebar --> */}


                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column content">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item li-shift">
                                        <a className="nav-link" href="#welcome">About</a>
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


                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">


                                    {/*  <!-- Nav Item - Alerts --> */}


                                    {/* <!-- Nav Item - User Information --> */}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img className="admin-image rounded-circle img-profile" src={image3} alt='...' />
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small admin-profile"><h6>Hi Dev Ed</h6></span>
                                        </a>
                                        {/*  <!-- Dropdown - User Information --> */}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="/#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="/#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                            <a className="dropdown-item" href="/#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Activity Log
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className='main-content'>

                                <section className='welcome' id='welcome'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-md-8'>
                                                <p>My Portfolio</p>
                                                <h2>Good Evening Dev Ed</h2>
                                                <p>It looks like you haven't made your first investment with us yet. Once you do invest, your investment will appear below.</p>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="card signup-card">
                                                    <div className="card-body">
                                                        <h6 className="card-subtitle mb-2 text-center">Verify your identity</h6>
                                                        <div className="card-body text-center">
                                                            <button className="btn btn-dark" type="button">View offer</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='investment'>
                                    <div className='container'>
                                        <div className='row row-invest'>
                                            <div className='col-md-6'>
                                                <h5>Check out our latest investment opportunities</h5>
                                            </div>
                                            <div className='col-md-6'></div>
                                        </div>


                                        <div className="row row-cards">
                                            <div className="col-md-4 row-cards">
                                                <div className="card">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Retail</li>
                                                    </ul>
                                                    <img src={image1} className="img-fluid" alt="..." />
                                                    <div className="card-body text-center list-header">
                                                        <button className="btn btn-dark" type="button">View offer</button>
                                                    </div>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item text-center"></li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="col-md-4 row-cards">
                                                <div className="card">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Retail</li>
                                                    </ul>
                                                    <img src={image1} className="img-fluid" alt="..." />
                                                    <div className="card-body text-center list-header">
                                                        <button className="btn btn-dark" type="button">View offer</button>
                                                    </div>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item text-center"></li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="col-md-4 row-cards">
                                                <div className="card">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Retail</li>
                                                    </ul>
                                                    <img src={image1} className="img-fluid" alt="..." />
                                                    <div className="card-body text-center list-header">
                                                        <button className="btn btn-dark" type="button">View offer</button>
                                                    </div>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item text-center"></li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="row row-label">
                                            <div className="col"></div>
                                            <div className="card-body text-center list-header">
                                                <button className="btn btn-dark" type="button">Browse All Investments</button>
                                            </div>
                                            {/* <div className="col-md-6 text-center">
                                                <button type="button" className="btn btn-success">show more</button>
                                            </div> */}
                                            <div className="col"></div>
                                        </div>
                                    </div>
                                </section>




                            </div>
















                            {/*   <!-- /.container-fluid --> */}

                        </div>


                    </div>
                    {/*  <!-- End of Content Wrapper --> */}




                </div>
                {/* footer */}
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
                {/* footer */}




            </body >
        </div >
    )
}

export default Dashboard;

// {/* <section className='welcome'>
//     <div className='container'>
//         <div className='row'>
//             <div className='col'></div>
//         </div>

//     </div>
// </section> */}