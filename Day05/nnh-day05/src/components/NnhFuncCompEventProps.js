import React from 'react'

export default function NnhFuncCompEventProps(nnhProps) {
    //Ham su ly su kien
    const nnhHanldeButtonClick1 = ()=>{
        alert("du lieu tu props:" +nnhProps.nnhRenderName);
        console.log("xin chao:",nnhProps.nnhRenderName);

    }
    const nnhHanldeButtonClick2 = (param)=>{
        //lay du lieu tu props
        alert("du lieu tu props (hien and2 click):" +nnhProps.nnhRenderName);
        //du lieu tu tham so 
        console.log('===========================');
        console.log("Hi:",param);
        console.log('===========================');
                
    }
  return (
    <div className='alert alert-info'>
        <button className='btn btn-primary mx-1'
            onClick={nnhHanldeButtonClick1}>button 1</button>
        
        <button className='btn btn-success mx-1'
            onClick={()=>nnhHanldeButtonClick2("hien and2")}>Button 2</button>
    </div>
  )
}
