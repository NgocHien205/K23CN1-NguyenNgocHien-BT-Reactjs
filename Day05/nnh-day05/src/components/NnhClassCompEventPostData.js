import React, { Component } from 'react'

 class NnhClassCompEventPostData extends Component {
    constructor(props){
        super(props);
        this.state ={
            nnhNoiDung:""
        }
    }
    //Ham su ly su kien
    NnhEventHandleClick = ()=>{
        //chuyen du lieu len App thong qua props
        this.props.onNnhDataToApp("Du lieu tu component con - NnhClassCompEventPostData");
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primary' onClick={this.NnhEventHandleClick}>
            Button 1 - Chuyen du lieu len App
        </button>
      </div>
    )
  }
}

export default NnhClassCompEventPostData
