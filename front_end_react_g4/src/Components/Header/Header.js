import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";    

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
                                            <a class="nav-link " href="#">Đăng nhập
                                                <span class="sr-only">(current)</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/signup"><a class="nav-link" href="#">Đăng ký tài khoản</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

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
                                    <a class="nav-link " href="#">Đăng nhập
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">Đăng ký tài khoản</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default Header;