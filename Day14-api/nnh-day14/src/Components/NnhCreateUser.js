import React, { useState } from 'react';
import axios from 'axios';

export default function NnhCreateUser() {
    const [nnh_Name, setNnhName] = useState('');
    const [nnh_Email, setNnhEmail] = useState('');
    const [nnh_Phone, setNnhPhone] = useState('');
    const [id, setNnhId] = useState('');
    const [nnhActive, setNnhActive] = useState(true);

    const nnhCreateUserApi = "https://67da0b4535c87309f52ac219.mockapi.io/K23CNT1-NGUYENNGOCHIEN/nnh_users";

    const nnhHandleSubmit = (event) => {
        event.preventDefault();
        let nnhNewUser = { nnh_Name, nnh_Email, nnh_Phone, id, nnhActive };
        
        axios.post(nnhCreateUserApi, nnhNewUser)
            .then(() => alert("Thêm mới user thành công!"))
            .catch(err => console.log(err));
    };

    return (
        <div className='container mt-4 p-4 border rounded shadow'>
            <h2 className='text-center fw-bold'>Thêm mới Users</h2>
            <hr />
            <form onSubmit={nnhHandleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="nnh_Name" className="form-label fw-bold fs-5">Name</label>
                    <input type='text' className='form-control' id="nnh_Name"
                        value={nnh_Name} onChange={(ev) => setNnhName(ev.target.value)} required />
                </div>

                <div className='mb-3'>
                    <label htmlFor="nnh_Email" className="form-label fw-bold fs-5">Email</label>
                    <input type='email' className='form-control' id="nnh_Email"
                        value={nnh_Email} onChange={(ev) => setNnhEmail(ev.target.value)} required />
                </div>

                <div className='mb-3'>
                    <label htmlFor="nnh_Phone" className="form-label fw-bold fs-5">Phone</label>
                    <input type='text' className='form-control' id="nnh_Phone"
                        value={nnh_Phone} onChange={(ev) => setNnhPhone(ev.target.value)} required />
                </div>

                <div className='mb-3'>
                    <label htmlFor="id" className="form-label fw-bold fs-5">Id</label>
                    <input type='text' className='form-control' id="id"
                        value={id} onChange={(ev) => setNnhId(ev.target.value)} required />
                </div>

                <div className='mb-4'>
                    <label className="form-label fw-bold fs-5">Trạng thái:</label>
                    <div className="form-check form-check-inline">
                        <input type='radio' className='form-check-input' name='nnh_active' id="nnh_active_hd"
                            value={true} checked={nnhActive === true} onChange={() => setNnhActive(true)} />
                        <label className="form-check-label fw-bold fs-5" htmlFor="nnh_active_hd">Hoạt động</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type='radio' className='form-check-input' name='nnh_active' id="nnh_active_kh"
                            value={false} checked={nnhActive === false} onChange={() => setNnhActive(false)} />
                        <label className="form-check-label fw-bold fs-5" htmlFor="nnh_active_kh">Khóa</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 fs-5 fw-bold">Thêm Mới</button>
            </form>
        </div>
    );
}
