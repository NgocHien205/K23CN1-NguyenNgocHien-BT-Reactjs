import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function NnhListUser() {
    //state
    const [nnhListUser, setNnhListUser] = useState([])
    const NnhApi = "https://67da0b4535c87309f52ac219.mockapi.io/K23CNT1-NGUYENNGOCHIEN-2310900033/nnh_user"

    useEffect(() => {
        axios.get(NnhApi)
            .then(nnh_response => {
                //xu ly du lieu tra ve tu api
                console.log(nnh_response.data);//du lieu tu api
                setNnhListUser(nnh_response.data)
            })
            .catch(error => {
                //xu ly loi
                console.error('co loi say ra:', error);
            });
    }, [])









    return (
        <div >
            <h1>Danh Sach</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* hien thi danh sach user */}
                    {
                        nnhListUser.map((nnhUserItem, index) => {
                            return (
                                <tr>
                                    <td>{nnhUserItem.Id}</td>
                                    <td>{nnhUserItem.nnh_Name}</td>
                                    <td>{nnhUserItem.nnh_Email}</td>
                                    <td>{nnhUserItem.nnh_Phone}</td>
                                    <td>
                                    {nnhUserItem.nnh_Active?
                                    <span className='badge text-bg-success'>hoat dong</span>
                                :<span className='badge text-bg-danger'>khoa</span>}
                                    </td>
                                    <td>
                                        <a href='#'>Sua</a> |
                                        <a href='#'>xoa</a>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}
