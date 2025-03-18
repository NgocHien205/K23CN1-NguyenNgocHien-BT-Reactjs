import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NnhReadMockAPI() {
    // khởi tạo state 
    const [nnhListUser, setNnhListUser] = useState([])
    // api
    const nnhApiOnline = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/nnh_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(nnhApiOnline)
            .then((nnh_response)=>{
                setNnhListUser(nnh_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const nnhElementUser = nnhListUser.map((nnh_item, index)=>{
        return(
            <tr>
                <td>{nnh_item.nnhId}</td>
                <td>{nnh_item.nnhFullName}</td>
                <td>{nnh_item.nnhAge}</td>
                <td>{nnh_item.nnhActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   nnhElementUser
                }
            </tbody>
        </table>
    </div>
  )
}