import './App.css';
import ListProduct from './pages/ListProduct/ListProduct';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListProduct />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
