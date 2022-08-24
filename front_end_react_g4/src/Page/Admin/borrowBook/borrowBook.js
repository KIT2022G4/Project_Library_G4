import React from 'react'
import { Link } from "react-router-dom";
import "./borrowBook.css";

export default function borrowBook() {
    return (
        <div className="container">
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                        {/* Breadcrumb  */}
                        <nav style={{}} aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/admin"><a href="#">Admin</a></Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Quản lý độc giả</li>
                            </ol>
                        </nav>
                        {/*End of breadcrumb */}
                    </div>
                    <div class="col py-3">
                        <h2>Quản lý độc giả</h2>

                        <table class="table" style={{ border: "solid 2px" }}>
                            <thead class="table-success">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên độc giả</th>
                                    <th>Số sách mượn</th>
                                    <th>
                                        Thời gian
                                    </th>
                                    <th>Chi nhánh</th>
                                    <th>Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>1</td>
                                    <td>Hoàng Anh</td>
                                    <td>5</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <Link to="/edit">
                                            <button type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Hoàng Anh</td>
                                    <td>5</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <Link to="/edit">
                                            <button type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Hoàng Anh</td>
                                    <td>5</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <Link to="/edit">
                                            <button type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Hoàng Anh</td>
                                    <td>5</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <Link to="/edit">
                                            <button type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Hoàng Anh</td>
                                    <td>5</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <Link to="/edit">
                                            <button type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Hoàng Anh</td>
                                    <td>5</td>
                                    <td>22/8/2022</td>
                                    <td>Hà Nội</td>
                                    <td>
                                        <Link to="/edit">
                                            <button type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
