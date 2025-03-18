import React from 'react'
import NnhCreateMockAPI from './components/NnhCreateMockAPI'
import NnhReadApiLocal from './components/NnhReadApiLocal'
import NnhReadMockAPI from './components/NnhReadMockAPI'

function NnhApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>
            ReactJS - API - Nguyen Ngoc Hien
        </h1>
        <hr/>
        <NnhReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <NnhReadMockAPI />

        <NnhCreateMockAPI />
        
    </div>
  )
}

export default NnhApp