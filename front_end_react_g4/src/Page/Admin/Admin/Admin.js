import React, { useReducer } from 'react';
import "./Admin.css";

import { Link } from 'react-router-dom';

function Admin() {

    return (
        <div className="container">
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light fixed-left">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 navbar">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Danh mục</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li>
                                    <Link to="/request">
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"></span>Yêu cầu sách
                                        </a></Link>
                                </li>
                                <li>
                                    <Link to="/borrowBook">
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"></span>Quản lý độc giả
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                            <div class="dropdown pb-4">
                                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                                    <span class="d-none d-sm-inline mx-1">loser</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><a class="dropdown-item" href="#">New project...</a></li>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col py-3">
                    <h2>Danh mục yêu cầu sách</h2>
                        <table class="table" style={{ border: "solid 2px" }}>
                            <thead class="table-success" >
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sách</th>
                                    <th>
                                        Thời gian
                                    </th>
                                    <th>Chi nhánh</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>1</td>
                                    <td>Vợ nhặt</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Vợ nhặt</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Vợ nhặt</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Vợ nhặt</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Vợ nhặt</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Vợ nhặt</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
