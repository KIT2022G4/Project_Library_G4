import './Login.css';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <>
            <div class="container form">
                {/* Breadcrumb  */}
                <nav style={{}} aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/"><a href="#">Trang chủ</a></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Đăng nhập</li>
                    </ol>
                </nav>
                {/*End of breadcrumb */}
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-sm-12 form_while">
                        <form action="action_page.php" method="post">
                            <div class="container title">
                                <h1>Đăng nhập</h1>
                            </div>

                            <div class="container form1">
                                <label for="uname"><b>Tên tài khoản</b></label>
                                <input class="d-flex justify-content-start" type="text" placeholder="Enter Username" name="uname" required />

                                <label for="psw"><b>Mật khẩu</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />

                                <label>
                                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label>
                                <br></br>
                                <button class="login-button btn btn-primary" type="button">Đăng nhập</button>

                                <p>Not a member?
                                    <Link to="/signup"><a href="#!">Register</a></Link>
                                </p>

                            </div>
                            <div class="container form1" style={{ backgroundColor: "f1f1f1" }}>
                                <button type="button" class="cancelbtn">Thoát</button>
                                <span class="psw">Quên <a href="#">mật khẩu?</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login