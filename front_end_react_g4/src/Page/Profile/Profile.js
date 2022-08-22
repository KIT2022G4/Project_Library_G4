import './Profile.css';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <footer>
                <div class="container bootstrap snippets bootdey">
                    <div class="row">
                        <div class="profile-nav col-md-3">
                            <div class="panel">
                                <div class="user-heading round">
                                    <a href="#">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                    </a>
                                    <h1>Trần Thu Trà</h1>
                                    <p>Student</p>
                                </div>
                            </div>
                        </div>
                        <div class="profile-info col-md-9">

                            <div class="panel">
                                <div class="bio-graph-heading">
                                    Open Library
                                </div>
                                <div class="panel-body bio-graph-info">
                                    <h1>Hồ sơ</h1>
                                    <div class="row">
                                        <div class="bio-row">
                                            <p><span>Họ và tên</span>: Trần Thu Trà</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Sách mượn</span>: 20</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Email </span>: thutra@gmail.com</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Sách chưa trả</span>: 5</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Số điện thoại</span>:  (12) 03 4567890</p>
                                        </div>
                                        <div class="bio-row">
                                            <p><span>Chi nhánh</span>: Hà Nội</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Profile