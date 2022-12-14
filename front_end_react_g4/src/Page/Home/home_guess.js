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
                  <h2>TRA C???U T??I LI???U S???</h2>
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
                  <h2>T??I NGUY??N S???</h2>
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
                  <h2>TH??NG B??O</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="notification">
                <p class="text-center mar-top">
                  Th?? vi???n s??? ch??? ph???c v??? b???n ?????c c???a KITS. ????? xem t??i li???u to??n
                  v??n ph???i ????ng k?? t??i kho???n. B???n ?????c g???i th??ng tin c?? nh??n (H???
                  v?? t??n, Khoa (L???p), m?? s??? SV/HV, s??? ??i???n tho???i, email
                  @ajc.edu.vn do H???c vi???n c???p) qua email:{" "}
                  <a href="">dangkitaikhoan@ajc.edu.vn.</a>
                </p>
                <p class="mar-left">
                  H?????ng d???n s??? d???ng Th?? vi???n s???, b???n ?????c xem m???c Tr??? gi??p.
                </p>
                <p class="mar-left">
                  Th?? vi???n s??? c?? th??? truy c???p tr??n m??y t??nh v?? Smart phone.
                </p>
                <p class="mar-left">S??? ??i???n tho???i h??? tr??? b???n ?????c:</p>
                <p class="mar-left">- C?? quan: (024)38340041.</p>
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
