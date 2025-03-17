import React from 'react'
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'
import NnhGioiThieu from './Components/NnhGioiThieu'
import NnhSanPham from './Components/NnhSanPham'
import NnhTinTuc from './Components/NnhTinTuc'
import NnhLienHe from './Components/NnhLienHe'
import NnhHome from './Components/NnhHome'

function NnhApp() {
  return (
    <BrowserRouter>
    <div className='container boder my-3'>
        <h1>Nguyễn Ngọc Hiến-React Router demo</h1>
        <hr/>
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-danger rounded">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/GioiThieu">Giới thiệu</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SanPham">Sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TinTuc">Tin tức</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/LienHe">Liên hệ</Link>
                </li>
              </ul>
            </nav>
            <div className='alert alert-danger'>
              <Routes>
                <Route path="/" element={<NnhHome/>} />
                <Route path="/GioiThieu" element={<NnhGioiThieu/>} />
                <Route path="/SanPham" element={<NnhSanPham/>} />
                <Route path="/TinTuc" element={<NnhTinTuc/>} />
                <Route path="/LienHe" element={<NnhLienHe/>} />

              </Routes>
            </div>
          </div>
    </div>
    </BrowserRouter>
  )
}

export default NnhApp