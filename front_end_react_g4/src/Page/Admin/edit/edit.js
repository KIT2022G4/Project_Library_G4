import React from 'react'
import { Link } from 'react-router-dom';
import "./edit.css";
// import { useState } from 'react';

export default function edit() {
    // const [books, setBooks] = useState(null);

    // const saveUser = () => {
    //     console.log('save data', books);
    
    //     const requestOptions = {
    //       method: method,
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(products),
    //     };
    //   };

  return (
    <div class="container">
       {/* Breadcrumb  */}
       <nav style={{}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/admin"><a href="#">Admin</a></Link></li>
                    <li class="breadcrumb-item"><Link to="/borrowBook"><a href="#">Quản lý độc giả</a></Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Chỉnh sửa thông tin</li>
                </ol>
            </nav>
            {/*End of breadcrumb */}
      <div class="container bootstrap snippets bootdey "
          style={{ padding: '100px 25px' }}>
          <div class="panel-body inf-content">
            <div class="row">
              <strong>Chỉnh sửa thông tin </strong>
              <br />
              <div class="table-responsive">
                <table class="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>STT</strong>
                      </td>
                      <td class="text-primary">
                      <input
                          type="number"
                          className="form-control"
                          name="name"
                        //   onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tên độc giả</strong>
                      </td>
                      <td>
                      <input
                          type="text"
                          className="form-control"
                          name="name"
                        //   onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Số sách mượn</strong>
                      </td>
                      <td>
                      <input
                          type="number"
                          className="form-control"
                          name="name"
                        //   onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Thời gian</strong>
                      </td>
                      <td>
                      <input
                          type="date"
                          className="form-control"
                          name="name"
                        //   onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Chi nhánh</strong>
                      </td>
                      <td class="text-primary">
                      <input
                          type="text"
                          className="form-control"
                          name="name"
                        //   onChange={(e) => handleChange(e)}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    type="button"
                    class="btn btn-primary"
                    // onClick={() => saveUser()}
                  >
                    Save
                  </button>
                  <span> </span>
                  <Link to="/">
                    <button type="button" class="btn btn-secondary">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
