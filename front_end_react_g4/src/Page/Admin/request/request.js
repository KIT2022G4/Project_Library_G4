import React from 'react'
import { Link } from 'react-router-dom';
import "./request.css";

export default function request() {
    return (
        <div className="container">
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                        {/* Breadcrumb  */}
                        <nav style={{}} aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/admin"><a href="#">Admin</a></Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Yêu cầu sách</li>
                            </ol>
                        </nav>
                        {/*End of breadcrumb */}
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
    )
}
