
import './App.css';
import ListProduct from './pages/ListProduct/ListProduct';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_guess from "./Page/Home/Home_guess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home_guess />} />
          <Route path="detail" element={<Detail />} />
          <Route path="edit" element={<Customers />} />
          <Route path="/" element={<ListProduct />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
