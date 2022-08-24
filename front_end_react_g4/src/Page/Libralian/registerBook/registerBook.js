import React from 'react'
import { Link } from "react-router-dom";
import "./registerBook.css";

export default function registerBook(props) {
    return (
        <div className="container">
            {/* Breadcrumb  */}
            <nav style={{}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/Libralian"><a href="#">Thủ thư</a></Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Đăng ký mượn sách</li>
                </ol>
            </nav>
            {/*End of breadcrumb */}
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                    </div>
                    <div class="col py-3">
                        <h2>Đăng ký mượn sách</h2>
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
                                <td>Nguyễn Quốc Trung</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Đăng ký mượn sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Trần Thu Trà</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Đăng ký mượn sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Phan Văn Quyết</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                           Đăng ký mượn sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>La Gia Huy</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Đăng ký mượn sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td> Ngô Phú Hoàng Anh</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Đăng ký mượn sách
                                        </button>
                                    </td>
                                </Link>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Trần Hoàng Tùng</td>
                                <td>5</td>
                                <td>22/8/2022</td>
                                <td>Hà Nội</td>
                                <Link to="/edit">
                                    <td>
                                        <button type="button" className="btn btn-primary">
                                            Đăng ký mượn sách
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
