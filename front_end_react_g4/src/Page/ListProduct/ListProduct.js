import "./ListProduct.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ListProduct = () => {
  let url = "http://localhost:8080/api/v1/book";
  const location = useLocation();
  if (location.state != null) {
    const { idcategory } = location.state;
    const { codebranch } = location.state;
    const { searchTerm } = location.state;
    if (idcategory != null) {
      url = "http://localhost:8080/api/v1/bookByCategory/" + idcategory;
    }
    if (codebranch != null) {
      url = "http://localhost:8080/api/v1/bookByBranch/" + codebranch;
    }
    if (searchTerm != null) {
      url = "http://localhost:8080/api/v1/bookSearch/" + searchTerm;
    }
  }
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setBook(response.data);
    });
  }, [url]);

  var bookList = [];
  if (book != null) {
    bookList = book.map((item) => (
      <div class="card mb-3" style={{ maxWidth: "1000px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <Link to={"/detail/" + item.idbook}>
              <img
                src={item.bookimage}
                class="img-fluid rounded-start"
                alt="..."
              />
            </Link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <Link to={"/detail/" + item.idbook}>
                <h5 class="card-title">{item.bookname}</h5>
              </Link>
              <ul class="address">
                <li>
                  <span class="col-md-12">Tác giả: {item.author}</span>
                </li>
                <li>
                  <span class="col-md-12">Nhà xuất bản: {item.publisher}</span>
                </li>
                <li>
                  <span class="col-md-12">Năm xuất bản: {item.dor}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));
  }
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
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        key={item.codebranch}
      >
        <div class="ms-2 me-auto">
          <Link to={"/listproduct"} state={{ codebranch: item.codebranch }}>
            <span class="fw-bold">{item.branchname}</span>
          </Link>
        </div>
      </li>
    ));
  }

  var categoryList = [];
  if (category != null) {
    categoryList = category.map((item) => (
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        key={item.idcategory}
      >
        <div class="ms-2 me-auto">
          <Link to={"/listproduct"} state={{ idcategory: item.idcategory }}>
            <span class="fw-bold">{item.categoryname}</span>
          </Link>
        </div>
      </li>
    ));
  }

  return (
    <>
      <div class="container-fluid">
        <div class="container">
          <nav style={{}} aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Thư viện sách
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-sm-4">
              <div>
                <div class="alert alert-primary" role="alert">
                  Thể loại
                </div>
                <ol class="list-group list-group-numbered">{categoryList}</ol>
              </div>

              <div>
                <div class="alert alert-primary" role="alert">
                  Chi nhánh
                </div>
                <ol class="list-group list-group-numbered">{branchList}</ol>
              </div>
            </div>

            <div class="container-fluid col-sm-8">
              <div class="alert alert-primary" role="alert">
                Danh mục sách
              </div>
              {bookList}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListProduct;
