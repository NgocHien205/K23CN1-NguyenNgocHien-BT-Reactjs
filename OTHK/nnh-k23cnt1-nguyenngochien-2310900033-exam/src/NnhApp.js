import React from 'react'
import { BrowserRouter as NnhRouter, Route, Routes } from 'react-router-dom'
import NnhNavBar from './components/NnhNavBar'
import NnhListUser from './components/NnhListUser'
import NnhCreateUser from './components/NnhCreateUser'
import NnhHome from './components/NnhHome'
import NnhEditUser from './components/NnhEditUser'

export default function NnhApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1 className='alert alert-info text-center'>K23cnt1 - Nguyễn Ngọc Hiến - 231090033</h1>
        <hr/>
        <NnhRouter>
          <NnhNavBar/>
          <hr/>
          <Routes>
            <Route path='/' element={<NnhHome />} /> 
            <Route path='/NnhListUser' element={<NnhListUser />} /> 
            <Route path='/NnhCreateUser' element={<NnhCreateUser />} />
            <Route path='/NnhEditUser' element={<NnhEditUser />} />
          </Routes>
        </NnhRouter>

    </div>
  )
}
