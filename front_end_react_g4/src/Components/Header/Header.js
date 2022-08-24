import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const Header = () => {
    return (
        <>

            <div class="top-container">
                <div class="fixed-top">
                    <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                        <div class="container">
                            <a class="navbar-brand" href="index.html"> OPEN LIBRARY</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">

                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item active">
                                        <Link to="/login">
                                            <span class="nav-link " >Đăng nhập
                                            </span>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/signup"><span class="nav-link">Đăng ký tài khoản</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <span>
                                            <Link to="/profile">
                                                <i class="fa-solid fa-user"></i>
                                            </Link>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
};

export default Header;