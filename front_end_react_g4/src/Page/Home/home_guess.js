import './Home_guess.css';
import React from 'react';
const Home_guess = () => {
    return (
        <>
            <section class="area overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
                    <div class="hero-text text-center">
                        <div class="section-heading">
                            <h2>TRA CỨU TÀI LIỆU SỐ</h2>
                        </div>
                    </div>
                    <div class="search-form">
                        <form class="d-flex">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                            <div class="col-md">
                                <div class="form-floating">
                                    <select class="form-select w-20" id="floatingSelectGrid"
                                        aria-label="Floating label select example">
                                        <option selected>Tên sách</option>
                                        <option value="1">Tên tác giả</option>
                                    </select>
                                    <label for="floatingSelectGrid">Tìm kiếm theo</label>
                                </div>
                            </div>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="categories d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <div class="container">
            <div class="cat-inner">
                <div class="row">
                    <div class="col-lg-2 p-0">
                        <div class="tns-outer">
                            <div class="single-cat tns-item tns-slide-active">
                                <div class="icon">
                                    <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/tapchi.svg"
                                        alt=""></img>
                                </div>
                                <h3>Luận án Tiến sĩ</h3>
                                <h5 class="total">125</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 p-0">
                        <div class="tns-outer">
                            <div class="single-cat tns-item tns-slide-active">
                                <div class="icon">
                                    <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/nghiencuukhoahoc.svg"
                                        alt=""></img>
                                </div>
                                <h3>Luận văn Thạc sĩ</h3>
                                <h5 class="total">1251</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 p-0">
                        <div class="tns-outer">
                            <div class="single-cat tns-item tns-slide-active">
                                <div class="icon">
                                    <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/giaotrinh.svg"
                                        alt=""></img>
                                </div>
                                <h3>Khóa luận Tốt nghiệp</h3>
                                <h5 class="total">25</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 p-0">
                        <div class="tns-outer">
                            <div class="single-cat tns-item tns-slide-active">
                                <div class="icon">
                                    <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/luanvantotnghiep.svg"
                                        alt=""></img>
                                </div>
                                <h3>Công trình NCKH</h3>
                                <h5 class="total">125</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 p-0">
                        <div class="tns-outer">
                            <div class="single-cat tns-item tns-slide-active">
                                <div class="icon">
                                    <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/tiensi.svg"
                                        alt=""></img>
                                </div>
                                <h3>Tài liệu Hội thảo</h3>
                                <h5 class="total">15</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 p-0">
                        <div class="tns-outer">
                            <div class="single-cat tns-item tns-slide-active">
                                <div class="icon">
                                    <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/thacsi.svg"
                                        alt=""></img>
                                </div>
                                <h3>Bài viết Tạp chí</h3>
                                <h5 class="total">125</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <div class="how-works client-logo-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
                    <div class="hero-text text-center">
                        <div class="section-heading">
                            <h2>TÀI NGUYÊN SỐ</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/luatdansu.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Tài chính Ngân hàng</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="single-work">
                        <div class="serial">
                            <img src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/quantrihanhchinh-vanphong.svg"
                                alt=""></img>
                        </div>
                        <h3>
                            <a href="">Luật Tố tụng dân sự - Hôn nhân gia đình</a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="how-works client-logo-section items-grid">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1 col-md-12 col-12">
                    <div class="hero-text text-center">
                        <div class="section-heading">
                            <h2>THÔNG BÁO</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="notification">
                        <p class="text-center mar-top">Thư viện số chỉ phục vụ bạn đọc của KITS. Để xem tài liệu toàn
                            văn phải đăng ký tài khoản. Bạn đọc gửi thông tin cá nhân (Họ và tên, Khoa (Lớp), mã số
                            SV/HV, số điện thoại, email @ajc.edu.vn do Học viện cấp) qua email: <a
                                href="">dangkitaikhoan@ajc.edu.vn.</a></p>
                        <p class="mar-left">Hướng dẫn sử dụng Thư viện số, bạn đọc xem mục Trợ giúp.</p>
                        <p class="mar-left">Thư viện số có thể truy cập trên máy tính và Smart phone.</p>
                        <p class="mar-left">Số điện thoại hỗ trợ bạn đọc:</p>
                        <p class="mar-left">- Cơ quan: (024)38340041.</p>
                        <p class="mar-left">- Hotline: Mrs.Tra: 0976396188; Mr.Trung: 0915101879.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="how-works client-logo-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-work">
                        <h3>
                            <a href="">Online Library Wiley</a>
                        </h3>
                        <img src="http://thuvien.ajc.edu.vn:8080/dspace/image/wiley.jpg" alt=""></img>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-work">
                        <h3>
                            <a href="">ScienceDirect</a>
                        </h3>
                        <img src="http://thuvien.ajc.edu.vn:8080/dspace/image/sciencedirect.jpg" alt=""></img>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="single-work">
                        <h3>
                            <a href="">Springer Link</a>
                        </h3>
                        <img src="http://thuvien.ajc.edu.vn:8080/dspace/image/springer.jpg" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home_guess;
