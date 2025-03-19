import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NnhListUser() {
    const [nnhListUser, setNnhListUser] = useState([]);
    const nnhApiOnline = "https://67da0b4535c87309f52ac219.mockapi.io/K23CNT1-NGUYENNGOCHIEN/nnh_users";

    useEffect(() => {
        axios
            .get(nnhApiOnline)
            .then((nnh_response) => {
                setNnhListUser(nnh_response.data);
            })
            .catch((error) => {
                console.log("Lỗi phát sinh", error);
            });
    }, []);

    const nnhHandleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
            axios.delete(`${nnhApiOnline}/${id}`)
                .then(() => {
                    setNnhListUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
                })
                .catch((error) => console.log("Lỗi khi xóa:", error));
        }
    };

    return (
        <div style={{
            width: '80%',
            margin: '20px auto',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#2e7d32',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
            }}>Danh sách người dùng</h2>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '20px'
            }}>
                <thead>
                    <tr style={{ background: '#a5d6a7', color: '#000', fontSize: '18px' }}>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Id</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Active</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {nnhListUser.map((nnh_item, index) => (
                        <tr key={index} style={{ textAlign: 'center' }}>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>{nnh_item.id}</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>{nnh_item.nnh_Name}</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>{nnh_item.nnh_Email}</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>{nnh_item.nnh_Phone}</td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <span style={{
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    color: '#fff',
                                    background: nnh_item.nnh_active ? '#66bb6a' : '#ef5350'
                                }}>
                                    {nnh_item.nnh_active ? 'Hoạt động' : 'Khóa'}
                                </span>
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                <Link to={`/NnhEditUser/${nnh_item.id}`} style={{
                                    padding: '5px 10px',
                                    background: '#42a5f5',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '5px',
                                    marginRight: '5px',
                                    transition: 'background 0.3s ease, transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => { e.target.style.background = '#1e88e5'; e.target.style.transform = 'scale(1.1)'; }}
                                onMouseLeave={(e) => { e.target.style.background = '#42a5f5'; e.target.style.transform = 'scale(1)'; }}>
                                    Sửa
                                </Link>
                                <button
                                    onClick={() => nnhHandleDelete(nnh_item.id)}
                                    style={{
                                        padding: '5px 10px',
                                        background: '#ef5350',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease, transform 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.background = '#c62828'; e.target.style.transform = 'scale(1.1)'; }}
                                    onMouseLeave={(e) => { e.target.style.background = '#ef5350'; e.target.style.transform = 'scale(1)'; }}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
