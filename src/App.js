import logo from './logo.svg';
import './App.css';
import Blogs from './components/Blogs';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Create from './components/Create';
import Login from './components/Login';
import Reg from './components/Reg';
import AddBlogs from './components/AddBlogs';
import ReadPage from './components/ReadPage';
import ForgotPassword from './components/ForgotPwd';
import UReadPage from './components/UReadPage';

function App() {
  return (
    <div className="App">
      {/* <Blogs/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cr" element={<Create />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/ab" element={<AddBlogs />} />
        <Route path="/read/:title" element={<ReadPage />} />
        <Route path="/uread" element={<UReadPage/>}/>
        <Route path='/fp' element={<ForgotPassword/>}/>
      </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
