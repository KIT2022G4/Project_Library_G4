import React from 'react'
import { Link } from "react-router-dom";
import "./payBook.css";

export default function PayBook() {
    return (
        <div className="container">
            {/* Breadcrumb  */}
            <nav style={{}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/admin"><a href="#">Thủ thư</a></Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Quản lý sách trả</li>
                </ol>
            </nav>
            {/*End of breadcrumb */}
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                    </div>
                    <div class="col py-3">
                        <h2>Quản lý sách trả</h2>
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
                                <th>Tên độc giả</th>
                                <th>Số sách mượn</th>
                                <th>
                                    Thời gian<span> </span>
                                </th>
                                <th>Chi nhánh</th>
                                <th>Hoạt động</th>
                            </tr>
                            <tr >
                                <td>1</td>
                                <td>Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Trả sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Trả sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Trả sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Trả sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Trả sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Trả sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
