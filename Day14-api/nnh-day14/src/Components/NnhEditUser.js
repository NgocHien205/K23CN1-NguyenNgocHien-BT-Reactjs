import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NnhEditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [nnh_users, setNnhUser] = useState({
        nnh_Name: '',
        nnh_Email: '',
        nnh_Phone: '',
        nnh_active: false
    });

    useEffect(() => {
        axios.get(`https://67da0b4535c87309f52ac219.mockapi.io/K23CNT1-NGUYENNGOCHIEN/nnh_users/${id}`)
            .then((response) => setNnhUser(response.data))
            .catch((error) => console.log("Lỗi:", error));
    }, [id]);

    const nnhHandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNnhUser((prevUser) => ({
            ...prevUser,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nnhHandleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://67da0b4535c87309f52ac219.mockapi.io/K23CNT1-NGUYENNGOCHIEN/nnh_users/${id}`, nnh_users)
            .then(() => {
                alert("Cập nhật thành công!");
                navigate('/NnhListUser');
            })
            .catch((error) => console.log("Lỗi:", error));
    };

    return (
        <div className="container mt-4 p-4 border rounded shadow">
            <h2 className="text-center fw-bold">Chỉnh sửa User ID: {id}</h2>
            <hr />
            <form onSubmit={nnhHandleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold fs-5">Name:</label>
                    <input
                        type="text"
                        name="nnh_Name"
                        className="form-control"
                        value={nnh_users.nnh_Name}
                        onChange={nnhHandleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold fs-5">Email:</label>
                    <input
                        type="email"
                        name="nnh_Email"
                        className="form-control"
                        value={nnh_users.nnh_Email}
                        onChange={nnhHandleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold fs-5">Phone:</label>
                    <input
                        type="text"
                        name="nnh_Phone"
                        className="form-control"
                        value={nnh_users.nnh_Phone}
                        onChange={nnhHandleChange}
                        required
                    />
                </div>
                <div className="mb-4 form-check">
                    <input
                        type="checkbox"
                        name="nnh_active"
                        className="form-check-input"
                        checked={nnh_users.nnh_active}
                        onChange={nnhHandleChange}
                    />
                    <label className="form-check-label fw-bold fs-5">Active</label>
                </div>
                <button type="submit" className="btn btn-success w-100 fs-5 fw-bold">Cập nhật</button>
            </form>
        </div>
    );
}
