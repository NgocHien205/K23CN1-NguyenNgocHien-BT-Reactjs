import React, { Component } from 'react';
import NnhFuncCompEvent1 from './components/NnhFuncCompEvent1';
import NnhClassCompEvent1 from './components/NnhClassCompEvent1';
import NnhFuncCompEventProps from './components/NnhFuncCompEventProps';
import NnhClassCompEventProps from './components/NnhClassCompEventProps';
import NnhClassCompEventState from './components/NnhClassCompEventState';
import NnhClassCompEventPostData from './components/NnhClassCompEventPostData';

class NnhApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nnhNoiDung:"CO MOI CHUYEN LIEN DC",
    }
  }
  //Ham su ly su kien khi component con chuyen du lieu len
  nnhHanleDataToApp = (content)=>{
    alert(content); 
    this.setState({
      nnhNoiDung:content,
    })
    }
  
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'>K23CNT1 - Nguyen Ngoc Hien - Event and Fore</h1>
        <hr/>
        <div>
          <h2>function Component - Event</h2>
          <NnhFuncCompEvent1 />
        </div>
        <hr/>

        <div>
          <h2>Class Component - Event</h2>
          <NnhClassCompEvent1 />
        </div>
        <hr/>
        <div>
          <h2>Function Component - Event; props</h2>
          <NnhFuncCompEventProps nnhRenderName="Nguyen Ngoc Hien"/>
        </div>
        <hr/>
        <div>
          <h2>Class Component - Event; props</h2>
          <NnhClassCompEventProps nnhRenderTitle = "Wecom to Hien Hien"/>
        </div>

        <div>
          <h2>Class Component - Event; state</h2>
          <NnhClassCompEventState />
        </div>

        <div>
          <h1>{this.state.nnhNoiDung}</h1>
          <h2>Class Component - Event;Post Data to App</h2>
          <NnhClassCompEventPostData  onNnhDataToApp={this.nnhHanleDataToApp}/>
        </div>
      </div>
    );
  }
}

export default NnhApp;
