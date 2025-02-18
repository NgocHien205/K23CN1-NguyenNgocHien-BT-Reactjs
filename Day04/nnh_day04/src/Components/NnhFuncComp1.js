import React from 'react'

export default function NnhFuncComp1(props) {
  return (
    <div>
        <h2>props is Object</h2>
        <p><b>Info:</b></p>
        <p>FullName:{props.renderInfo.FullName}</p>
        <p>Age:{props.renderInfo.Age}</p>
        <p>Phone:{props.renderInfo.Phone}</p>
        
    </div>
  )
}
