import './ListProduct.css';
import React from "react";
import { Link } from "react-router-dom";

const ListProduct = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="container">
                    {/* Breadcrumb  */}
                    <nav style={{}} aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/"><a href="#">Trang chủ</a></Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Thư viện sách</li>
                        </ol>
                    </nav>
                    {/*End of breadcrumb */}
                    <div class="row">
                        <div class="col-sm-4">
                            <div>
                                <div class="alert alert-primary" role="alert">
                                    Thống kê
                                </div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Thư viện sách</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="">Số lượng sách: <span class="fw-bold">13.081</span></div>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="">Tổng số tệp điện tử: <span class="fw-bold">13.074</span></div>
                                        </div>
                                    </li>
                                </ol>
                            </div>


                            <div>
                                <div class="alert alert-primary" role="alert">
                                    Thư viện sách
                                </div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Chính trị - Pháp luật</div>

                                        </div>
                                        <span class="badge bg-primary rounded-pill">150</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Khoa học công nghệ - Kinh tế</div>

                                        </div>
                                        <span class="badge bg-primary rounded-pill">90</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Văn học nghệ thuật</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">50</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Văn hóa xã hội - Lịch sử</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">50</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Truyện - Tiểu Thuyết</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">50</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Tâm lý - Tâm linh - Tôn giáo</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">50</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Sách thiếu nhi</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">50</span>
                                    </li>
                                </ol>
                            </div>

                            <div>
                                <div class="alert alert-primary" role="alert">
                                    Chi nhánh
                                </div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Hà Nội</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">TP.Hồ Chí Minh</div>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-start">
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">Quảng Ninh</div>
                                        </div>
                                    </li>
                                </ol>
                            </div>



                        </div>

                        <div class="container-fluid col-sm-8">
                            <div class="alert alert-primary" role="alert">
                                Danh mục sách
                            </div>
                            <div class="card mb-3" style={{ maxWidth: "1000px" }} >
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <Link to="/detail">
                                            <img src="https://thuvienso.hcmulaw.edu.vn/wpViewImage.ashx?Id=2251"
                                                class="img-fluid rounded-start" alt="..." />
                                        </Link>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Thi hành án chính ở Việt Nam - Lý luận và thực tiễn</h5>
                                            <ul class="address">
                                                <li>
                                                    <label class="cola-md-12">Nhà xuất bản:</label>
                                                    <div class="col-md-12">
                                                        <span
                                                            id="ctl00_phContent_grvPage_ctl03_rptListEdataFile_ctl01_lblPublisher"><a
                                                                href="TraCuuTaiLieuSo2KetQuaTimKiem.aspx?Id=2251&amp;Type=Publisher&amp;MetaData="></a><br></br></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label class="col-md-12">Chủ đề:</label>
                                                    <div class="col-md-12">
                                                        <span>
                                                            <p>Thi hành án <br></br>
                                                                Hành chính</p>
                                                        </span>
                                                    </div>
                                                </li>

                                            </ul>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://thuvienso.hcmulaw.edu.vn/wpViewImage.ashx?Id=2251"
                                                class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Thi hành án chính ở Việt Nam - Lý luận và thực tiễn</h5>
                                                <ul class="address">
                                                    <li>
                                                        <label class="col-md-12">Nhà xuất bản:</label>
                                                        <div class="col-md-12">
                                                            <span
                                                                id="ctl00_phContent_grvPage_ctl03_rptListEdataFile_ctl01_lblPublisher"><a
                                                                    href="TraCuuTaiLieuSo2KetQuaTimKiem.aspx?Id=2251&amp;Type=Publisher&amp;MetaData="></a><br></br></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label class="col-md-12">Chủ đề:</label>
                                                        <div class="col-md-12">
                                                            <span>
                                                                <p>Thi hành án <br></br>
                                                                    Hành chính</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                </ul>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://thuvienso.hcmulaw.edu.vn/wpViewImage.ashx?Id=2251"
                                                class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Thi hành án chính ở Việt Nam - Lý luận và thực tiễn</h5>
                                                <ul class="address">
                                                    <li>
                                                        <label class="col-md-12">Nhà xuất bản:</label>
                                                        <div class="col-md-12">
                                                            <span
                                                                id="ctl00_phContent_grvPage_ctl03_rptListEdataFile_ctl01_lblPublisher"><a
                                                                    href="TraCuuTaiLieuSo2KetQuaTimKiem.aspx?Id=2251&amp;Type=Publisher&amp;MetaData="></a><br></br></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label class="col-md-12">Chủ đề:</label>
                                                        <div class="col-md-12">
                                                            <span>
                                                                <p>Thi hành án <br></br>
                                                                    Hành chính</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                </ul>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://thuvienso.hcmulaw.edu.vn/wpViewImage.ashx?Id=2251"
                                                class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Thi hành án chính ở Việt Nam - Lý luận và thực tiễn</h5>
                                                <ul class="address">
                                                    <li>
                                                        <label class="col-md-12">Nhà xuất bản:</label>
                                                        <div class="col-md-12">
                                                            <span
                                                                id="ctl00_phContent_grvPage_ctl03_rptListEdataFile_ctl01_lblPublisher"><a
                                                                    href="TraCuuTaiLieuSo2KetQuaTimKiem.aspx?Id=2251&amp;Type=Publisher&amp;MetaData="></a><br></br></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label class="col-md-12">Chủ đề:</label>
                                                        <div class="col-md-12">
                                                            <span>
                                                                <p>Thi hành án <br></br>
                                                                    Hành chính</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                </ul>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListProduct