import './Detail.css';
import React from 'react';

const Detail = () => {
    return (
        <>
            <section class="product-details spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__pic">
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://thuvienso.hcmulaw.edu.vn/wpViewImage.ashx?Id=2251" class="d-block w-100" alt="..."></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://thuvienso.hcmulaw.edu.vn/wpViewImage.ashx?Id=2251" class="d-block w-100" alt="..."></img>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>Tội lạm dụng tín nhiệm chiếm đoạt tài sản theo luật Hình sự Việt Nam</h3>
                                <div class="product__details__author">
                                    Tác giả: Nguyễn Đình Khang
                                </div>
                                <ul>
                                    <li><b>Từ khóa</b> <span>Lạm dụng tín nhiệm</span></li>
                                    <li><b>Tóm tắt</b> <span>Luận văn nghiên cứu các quy định pháp luật về: Chương I, Những vấn đề lý luận và pháp lý về tội lạm dụng tín nhiệm chiếm đoạt tài sản trong luật Hình sự; Chương II. Thực tiễn áp dụng và những kiến nghị nhằm hoàn thiện quy định tội lạm dụng tín nhiệm chiếm đoạt trong luật Hình sự Việt Nam</span></li>
                                    <li><b>Năm xuất bản</b> <span>2022</span></li>
                                    <li><b>Nhà xuất bản</b> <span>NXB Thiếu Niên</span></li>
                                    <li><b>Share on</b>
                                        <div class="share">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                            <a href="#"><i class="fab fa-pinterest"></i></a>
                                        </div>
                                    </li>
                                </ul>
                                <button class="btn btn-outline-danger text-right">Mượn sách</button>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Bình luận
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="product__details__tab__desc">
                                                <p>Sách đáng đọc :))</p>
                                                <p>Sách đáng đọc :))</p>
                                                <p>Sách đáng đọc :))</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detail;