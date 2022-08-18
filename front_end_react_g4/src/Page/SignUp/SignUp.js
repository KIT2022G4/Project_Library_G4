import './SignUp.css';
const SignUp = () => {
    return (
        <>
            <div class="container form">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-sm-12 form_while">
                        <form action="action_page.php" method="post">
                            <div class="container title">
                                <h1>Register</h1>
                            </div>
                            <div class="container form1">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />

                                <label for="psw"><b> Confirm Password</b></label>
                                <input type="password" placeholder="Confirm Password" name="psw" required />

                                <button type="submit">Sign Up</button>
                                <label>
                                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label>
                            </div>

                            <div class="container form1" style={{ backgroundColor: "#f1f1f1" }}>
                                <button type="button" class="cancelbtn">Cancel</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp