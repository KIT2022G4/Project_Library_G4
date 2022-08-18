import './Login.css';
const Login = () => {
    return (
        <>
            <div class="container form">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-sm-12">
                        <form action="action_page.php" method="post">
                            <div class="container title">
                                <h1>Log In</h1>
                            </div>

                            <div class="container form1">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />

                                <button type="submit">Login</button>
                                <label>
                                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label>
                            </div>

                            <div class="container form1" style={{backgroundColor: "f1f1f1"}}>
                                <button type="button" class="cancelbtn">Cancel</button>
                                <span class="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login