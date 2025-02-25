import React, { Component } from 'react'
import NnhEventFrom1 from './Components/NnhEventFrom1';
import NnhEventFrom2 from './Components/NnhEventFrom2';
import NnhEventFrom3 from './Components/NnhEventFrom3';
import NnhEventFrom4 from './Components/NnhEventFrom4';
import NnhEventFrom5 from './Components/NnhEventFrom5';

 class NnhApp extends Component {


   // Hàm xử lý nhận dữ liệu từ form student
   nnhHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }


  render() {
    return (
      <div className='container border my -3 bg-white'>
          <h1 className='text-center'>Event From - Demo</h1>
          <hr/>
          <NnhEventFrom1 />
          <NnhEventFrom2 />
          <NnhEventFrom3 />
          <NnhEventFrom4 />
          <NnhEventFrom5 onNnhHandleSubmit={this.nnhHandleSubmitForm}/>

      </div>
    );
  }
}

export default NnhApp;