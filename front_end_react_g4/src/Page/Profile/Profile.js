import './Profile.css';
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <div class="container bootstrap snippets bootdey profile-edit">
                 {/* Breadcrumb  */}
                 <nav style={{}} aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/"><a href="#">Trang chủ</a></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Hồ sơ</li>
                    </ol>
                </nav>
                {/*End of breadcrumb */}
                <div class="row profile-fix">
                    <div class="profile-nav col-md-3">
                        <div class="panel">
                            <div class="user-heading round">
                                <a href="#">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </a>
                                <h1>Trần Thu Trà</h1>
                                <p>thutra@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="profile-info col-md-9">
                        <div class="panel">
                            <div class="panel-body bio-graph-info">
                                <h3>Hồ sơ</h3>
                                <div class="row">
                                    <div class="bio-row">
                                        <p><span>Họ và tên</span>: Trần Thu Trà</p>
                                    </div>
                                    <div class="bio-row">
                                        <p><span>Sách mượn</span>: 25</p>
                                    </div>
                                    <div class="bio-row">
                                        <p><span>Mã độc giả</span>: 1</p>
                                    </div>
                                    <div class="bio-row">
                                        <p><span>Sách chưa trả</span>: 5</p>
                                    </div>
                                    <div class="bio-row">
                                        <p><span>Email</span>: thutra@gmail.com</p>
                                    </div>
                                    <div class="bio-row">
                                        <p><span>Sách đã trả</span>: 20</p>
                                    </div>
                                    <div class="bio-row">
                                        <p><span>Số điện thoại</span>: (12) 03 4567890</p>
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
export default Profile