import React, { useState } from 'react'

function NnhUseStateListObject() {
    //mockdatamockdata
    const listStudent = [
        { nnhId: "SV001", nnhName: "Nguyễn Ngọc Hiến", nnhAge: 20, nnhClass: "K23CNT1" },
        { nnhId: "SV002", nnhName: "Vũ Mai Chi", nnhAge: 22, nnhClass: "K23CNT2" },
        { nnhId: "SV003", nnhName: "Trần Tiến Anh", nnhAge: 21, nnhClass: "K23CNT3" },
        { nnhId: "SV004", nnhName: "Nguyễn Công Tùng", nnhAge: 23, nnhClass: "K23CNT4" },
    ];
    //Tạo state với hook
    const [nnhStudents, setNnhStudents] = useState(listStudent);
    //render data 
    let nnhElement = nnhStudents.map((nnhItem, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{nnhItem.tcvId}</td>
                <td>{nnhItem.nnhName}</td>
                <td>{nnhItem.nnhAge}</td>
                <td>{nnhItem.nnhClass}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>nnhID</th>
                        <th>nnhName</th>
                        <th>nnhAge</th>
                        <th>nnhClass</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nnhElement}
                </tbody>
            </table>
        </div>
    )
}

export default NnhUseStateListObject