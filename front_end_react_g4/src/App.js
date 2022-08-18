
import './App.css';
import ListProduct from './Page/ListProduct/ListProduct';
import Detail from './Page/Detail/Detail'
import Login from './Page/Login/Login';
import SignUp from './Page/SignUp/SignUp';
import Profile from './Page/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_guess from "./Page/Home/home_guess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home_guess />} />
          <Route path="detail" element={<Detail />} />
          {/* <Route path="edit" element={<Customers />} /> */}
          <Route path="listproduct" element={<ListProduct />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
