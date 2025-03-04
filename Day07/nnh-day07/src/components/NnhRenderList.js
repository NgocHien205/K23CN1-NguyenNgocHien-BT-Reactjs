import React from 'react'

export default function NnhRenderList() {
    const nnhNames = ["Hien","anh","chi"];

    //Hiển thị giá trị của mảng
    const nnhElementName = nnhNames.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div>
        <h2>Danh sách các anh hùng thời đại</h2>
        {nnhElementName}
    </div>
  )
}
