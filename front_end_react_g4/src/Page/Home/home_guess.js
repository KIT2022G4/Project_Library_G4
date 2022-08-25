import "./Home_guess.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home_guess = () => {
  const [branch, setBranch] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/branch").then((response) => {
      setBranch(response.data);
    });
    axios.get("http://localhost:8080/api/v1/category").then((response) => {
      setCategory(response.data);
    });
  }, []);
  var branchList = [];
  if (branch != null) {
    branchList = branch.map((item) => (
      <div class="col-lg-4 p-0">
        <div class="tns-outer">
          <div class="single-cat tns-item tns-slide-active">
            <Link to={"/listproduct"} state={{ codebranch: item.codebranch }}>
              <div class="icon">
                <img
                  src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/tapchi.svg"
                  alt=""
                ></img>
              </div>
              <h3>{item.branchname}</h3>
            </Link>
          </div>
        </div>
      </div>
    ));
  }

  var categoryList = [];
  if (category != null) {
    categoryList = category.map((item) => (
      <div class="col-lg-3 col-md-6 col-12">
        <div class="single-work">
          <Link to={"/listproduct"} state={{ idcategory: item.idcategory }}>
            <div class="serial">
              <img
                src="https://thuvienso.hcmulaw.edu.vn/assets/images/categories/luatdansu.svg"
                alt=""
              ></img>
            </div>
            <h3>{item.categoryname}</h3>
          </Link>
        </div>
      </div>
    ));
  }

  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = () => {
    setSearchTerm("");
  };
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
                <nav class="navbar navbar-light bg-light">
                  <div class="container-fluid">
                    <form class="d-flex">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      ></input>
                      <Link
                        to={"/listproduct"}
                        state={{ searchTerm: searchTerm }}
                        onClick={searchHandler}
                      >
                        <button class="btn btn-outline-success" type="submit">
                          Search
                        </button>
                      </Link>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="categories d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <div class="container">
          <div class="cat-inner">
            <div class="row">{branchList}</div>
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
          <div class="row justify-content-center">{categoryList}</div>
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
                <p class="text-center mar-top">
                  Thư viện số chỉ phục vụ bạn đọc của KITS. Để xem tài liệu toàn
                  văn phải đăng ký tài khoản. Bạn đọc gửi thông tin cá nhân (Họ
                  và tên, Khoa (Lớp), mã số SV/HV, số điện thoại, email
                  @ajc.edu.vn do Học viện cấp) qua email:{" "}
                  <a href="">dangkitaikhoan@ajc.edu.vn.</a>
                </p>
                <p class="mar-left">
                  Hướng dẫn sử dụng Thư viện số, bạn đọc xem mục Trợ giúp.
                </p>
                <p class="mar-left">
                  Thư viện số có thể truy cập trên máy tính và Smart phone.
                </p>
                <p class="mar-left">Số điện thoại hỗ trợ bạn đọc:</p>
                <p class="mar-left">- Cơ quan: (024)38340041.</p>
                <p class="mar-left">
                  - Hotline: Mrs.Tra: 0976396188; Mr.Trung: 0915101879.
                </p>
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
                <img
                  src="http://thuvien.ajc.edu.vn:8080/dspace/image/wiley.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-work">
                <h3>
                  <a href="">ScienceDirect</a>
                </h3>
                <img
                  src="http://thuvien.ajc.edu.vn:8080/dspace/image/sciencedirect.jpg"
                  alt=""
                ></img>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-work">
                <h3>
                  <a href="">Springer Link</a>
                </h3>
                <img
                  src="http://thuvien.ajc.edu.vn:8080/dspace/image/springer.jpg"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_guess;
