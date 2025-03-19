import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import NnhHome from './NnhHome';
import NnhCreateUser from './NnhCreateUser';
import NnhListUser from './NnhListUser';
import NnhEditUser from './NnhEditUser';

export default function NnhNavBar() {
    return (
        <BrowserRouter>
            <div className='container my-3 p-4 border rounded shadow-lg'>
                <h2 className='text-center fw-bold' style={{ color: 'black' }}>Nguyễn Ngọc Hiến - Mini Project</h2>
                <hr />
                <nav className='navbar navbar-expand-lg navbar-dark rounded px-3' style={{ background: '#d9b3ff' }}>
                    <div className='container-fluid'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row'>
                            <li className='nav-item mx-3'>
                                <Link className='nav-link text-white fw-bold p-2 rounded' to='/' style={{ transition: '0.3s' }}
                                    onMouseEnter={e => e.target.style.backgroundColor = '#6A5ACD'}
                                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>🏠 Home</Link>
                            </li>
                            <li className='nav-item mx-3'>
                                <Link className='nav-link text-white fw-bold p-2 rounded' to='/NnhListUser' style={{ transition: '0.3s' }}
                                    onMouseEnter={e => e.target.style.backgroundColor = '#6A5ACD'}
                                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>📋 Danh sách User</Link>
                            </li>
                            <li className='nav-item mx-3'>
                                <Link className='nav-link text-white fw-bold p-2 rounded' to='/NnhCreateUser' style={{ transition: '0.3s' }}
                                    onMouseEnter={e => e.target.style.backgroundColor = '#6A5ACD'}
                                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>➕ Thêm Mới User</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className='mt-4'>
                    <Routes>
                        <Route path='/' element={<NnhHome />} />
                        <Route path='/NnhListUser' element={<NnhListUser />} />
                        <Route path='/NnhCreateUser' element={<NnhCreateUser />} />
                        <Route path='/NnhEditUser/:id' element={<NnhEditUser />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
