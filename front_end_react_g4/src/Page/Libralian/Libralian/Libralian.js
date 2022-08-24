import React, { useReducer } from 'react';
import "./Libralian.css";
import { Link } from 'react-router-dom';


function Libralian() {

    return (
        <div className="container">
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light fixed-left">
                        {/* {sidenav()} */}
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 navbar">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Tìm kiếm sách</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li>
                                    <Link to="/request">
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"></span>Đăng ký mượn sách
                                        </a></Link>
                                </li>
                                <li>
                                    <Link to="/borrowBook">
                                        <a href="#" class="nav-link px-0 align-middle">
                                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"></span>Trả sách
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
                        <h2>Danh mục sách</h2>
                        <div class="row">
                            <div class="col-sm-6">
                                <div className="input-group">
                                </div>
                                <p>
                                </p>
                            </div>
                        </div>
                        <table class="table">
                            <tr >
                                <th>STT</th>
                                <th>Tên sách</th>
                                <th>
                                    Thời gian<span> </span>
                                </th>
                                <th>Chi nhánh</th>
                            </tr>
                            <tr >
                                <td>1</td>
                                <td>Vợ nhặt</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Vợ chồng A Phủ</td>
                                <td>12/7/2022</td>
                                <td>TP. Hồ Chí Minh</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ai đã đặt tên cho dòng sông</td>
                                <td>29/8/2022</td>
                                <td>Hà Nội</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Tây tiến</td>
                                <td>14/5/2022</td>
                                <td>TP. Hồ Chí Minh</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Người lái đò sông Đà</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Sóng</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Libralian;
