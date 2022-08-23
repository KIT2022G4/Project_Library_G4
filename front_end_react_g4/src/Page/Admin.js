import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../Components/ProductTable';

function Admin() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://62b421ada36f3a973d2c998f.mockapi.io/shop';
        if (searchTerm.length > 0) {
            url = url + '?search=' + searchTerm;
        }

        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); //setStudents(data)
            });
    }, [searchTerm]);

    return (
        <div className="container">
            <h2>Danh sách sinh viên</h2>
            <div class="row">
                <div class="col-sm-6">
                    <div className="input-group">
                        <div className="input-group-append">
                            <button
                                className="btn btn-secondary"
                                type="button"
                      
                            >
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <p>
                
                    </p>
                </div>
            </div>
            <table className="table">
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>

                    <th>
                        Đơn giá<span> </span>
                    </th>
                    <th>Sản phẩm khác</th>
                    <th>Trạng thái</th>
                </tr>
            
            </table>
        </div>
    );
}

export default Admin;
