import React from 'react'

export default function NnhFuncCompEvent1() {
    //Ham su ly su kien
    // const nnhEvenButton1Click = ()=>{
    //     alert('Button 1 - Clicked');
    // };

    const nnhEvenButton2Click = ()=>{
        alert('Button 2 - Clicked');
    };
    const nnhEvenButton3Click = (name)=>{
        alert("Name:" + name)
    }
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={nnhEvenButton1Click()}>
            Button 1
        </button> */}
        <button className='btn btn-primary mx-1' onClick={nnhEvenButton2Click}>
            Button 2
        </button>
        {/* <button className='btn btn-success' onClick={nnhEvenButton3Click("Ngoc Hien")}>
            Button 3
        </button> */}
        <button className='btn btn-success mx-1' onClick={()=>nnhEvenButton3Click("Nguyen Ngoc Hien")}>
            Button 4
        </button>
    </div>
  );
}
