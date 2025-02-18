import React from 'react'

export default function NnhFuncComp(props) {
  return (
    <div>
        <h2>Demo: Function Component props</h2>
        <p>Lấy dữ liệu từ props để hiển thịthị</p>
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>Company: {props.company}</p>
        <p>Note: {props.note}</p>
    </div>
  )
}
