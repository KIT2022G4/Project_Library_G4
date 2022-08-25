import "./Detail.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [detail, setDetail] = useState(null);
  const params = useParams();
  const [preloader, setPreloader] = useState(true);
  const [branch, setBranch] = useState(null);
  useEffect(() => {
    setPreloader(true);
    let url = "http://localhost:8080/api/v1/book/" + params.id;
    axios
      .get(url)
      .then((response) => {
        setDetail(response.data);
      })
      .then(() => setPreloader(false))
      .then(() => {});
  }, []);

  useEffect(() => {
    if (detail != null) {
      axios
        .get("http://localhost:8080/api/v1/branchLeft/" + detail.codebook)
        .then((response) => {
          setBranch(response.data);
        });
    }
  }, [detail]);

  var branchList = [];
  if (branch != null) {
    branchList = branch.map((item) => (
      <button class="btn">{item.branchname}</button>
    ));
  }
  return (
    <>
      {!preloader ? (
        <section class="product-details spad">
          <div class="container">
            <nav style={{}} aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to="/listproduct">Thư viện sách</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Chi tiết
                </li>
              </ol>
            </nav>

            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="product__details__pic">
                  <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src={detail.bookimage}
                          class="d-block w-100"
                          alt="..."
                        ></img>
                      </div>
                      <div class="carousel-item">
                        <img
                          src={detail.bookimage}
                          class="d-block w-100"
                          alt="..."
                        ></img>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="product__details__text">
                  <h3>{detail.bookname}</h3>
                  <div class="product__details__author">
                    Tác giả: {detail.author}
                  </div>
                  <div className="product__details__rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                  </div>
                  <ul>
                    <li>
                      <b>Tóm tắt</b> <span>{detail.introduction}</span>
                    </li>
                    <li>
                      <b>Năm xuất bản</b> <span>{detail.dor}</span>
                    </li>
                    <li>
                      <b>Nhà xuất bản</b> <span>{detail.publisher}</span>
                    </li>

                    <li>
                      <b>Share on</b>
                      <div class="share">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-pinterest"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <b>Chi nhánh: </b> {branchList}
                    </li>
                  </ul>
                  <button class="btn btn-outline-danger">Mượn sách</button>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Bình luận
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <form class="row g-3">
                        <div class="col-md-6">
                          <label for="username" class="form-label">
                            Tên người dùng
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                          ></input>
                        </div>
                        <div class="col-md-6">
                          <span>Đánh giá số sao</span>
                          <div class="rating">
                            {" "}
                            <input
                              type="radio"
                              name="rating"
                              value="5"
                              id="5"
                            />
                            <label for="5">☆</label>{" "}
                            <input
                              type="radio"
                              name="rating"
                              value="4"
                              id="4"
                            />
                            <label for="4">☆</label>{" "}
                            <input
                              type="radio"
                              name="rating"
                              value="3"
                              id="3"
                            />
                            <label for="3">☆</label>{" "}
                            <input
                              type="radio"
                              name="rating"
                              value="2"
                              id="2"
                            />
                            <label for="2">☆</label>{" "}
                            <input
                              type="radio"
                              name="rating"
                              value="1"
                              id="1"
                            />
                            <label for="1">☆</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="comment" class="form-label">
                            Bình luận
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="comment"
                          ></input>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">
                            Bình luận
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>...</div>
      )}
    </>
  );
};

export default Detail;
