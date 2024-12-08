import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className='logo m-2 m-md-0 ms-md-5' src="https://web.technozindustries.com/wp-content/uploads/2024/09/logo-final-2-1.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRODUCTS & SOLUTIONS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light">CLIENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light">CONTACT</a>
                            </li>
                        </ul>

                        <a className='getintouch d-flex align-items-center me-5' href="#">
                            <i class="fa-solid fa-envelope me-2" style={{fontSize:"18px"}}></i>
                            Get In Touch
                        </a>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar