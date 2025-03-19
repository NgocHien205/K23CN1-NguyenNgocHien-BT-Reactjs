import React from 'react';

export default function NnhHome() {
  return (
    <div className='container my-3'>
      {/* Banner với hình nền */}
      <div 
        className='banner rounded shadow-lg mb-4'
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          borderRadius: '12px'
        }}
      >
        <h1 className='display-4'>K23CN1 - ReactJS with API</h1>
      </div>
      
      {/* Thông tin cá nhân */}
      <div className='container border p-4 text-center' style={{ backgroundColor: '#ADD8E6' }}>
        <h2>Nguyễn Ngọc Hiến - 2310900033</h2>
      </div>
    </div>
  );
}