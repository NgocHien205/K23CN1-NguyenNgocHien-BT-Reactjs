import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NnhReadApiLocal() {
    // khởi tạo state
    const [nnhListUser, setNnhListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho nnhListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nnhResponse)=>{
                setNnhListUser(nnhResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    nnhListUser.map((nnhItem, index)=>{
                        return (
                            <tr>
                                <td>{nnhItem.nnhFullName}</td>
                                <td>{nnhItem.nnhAge}</td>
                                <td>{nnhItem.nnhClass}</td>
                                <td>{nnhItem.nnhId}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}